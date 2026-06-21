import { Category, DeliveryLineItem, DeliveryProviderId, DeliveryQuote, GroceryListEntry, GroceryMemoryItem } from '../types';
import { normalizeIngredientKey } from '../utils/groceryLogic';

type ProviderConfig = {
  id: DeliveryProviderId;
  name: string;
  fulfillment: string;
  // Markup applied to base grocery prices (delivery apps mark items up vs. in-store).
  itemMarkup: number;
  deliveryFee: number;
  serviceFeePct: number;
  etaMinutes: number;
  note: string;
  url: string;
};

const PROVIDERS: ProviderConfig[] = [
  {
    id: 'curbside',
    name: 'Local Curbside',
    fulfillment: 'Curbside pickup',
    itemMarkup: 1.0,
    deliveryFee: 0,
    serviceFeePct: 0,
    etaMinutes: 120,
    note: 'Order ahead, pull up, they load the car. Shelf prices, no delivery or service fees.',
    url: 'https://www.walmart.com/cp/grocery-pickup-and-delivery/1242527',
  },
  {
    id: 'instacart',
    name: 'Instacart',
    fulfillment: 'Delivery',
    itemMarkup: 1.15,
    deliveryFee: 3.99,
    serviceFeePct: 0.05,
    etaMinutes: 60,
    note: 'Builds a real Instacart cart from your list — pick a store and check out. Fees and tip apply.',
    url: 'https://www.instacart.com',
  },
  {
    id: 'doordash',
    name: 'DoorDash',
    fulfillment: 'Delivery',
    itemMarkup: 1.18,
    deliveryFee: 2.99,
    serviceFeePct: 0.08,
    etaMinutes: 50,
    note: 'Fast grocery delivery from nearby stores. Fees and tip on top.',
    url: 'https://www.doordash.com/grocery',
  },
  {
    id: 'ubereats',
    name: 'Uber Eats',
    fulfillment: 'Delivery',
    itemMarkup: 1.22,
    deliveryFee: 4.49,
    serviceFeePct: 0.1,
    etaMinutes: 45,
    note: 'Quickest delivery, highest markup. Best when you need it now.',
    url: 'https://www.ubereats.com/category/grocery',
  },
];

// Rough per-item price when we have no purchase history for the item.
const CATEGORY_BASE_PRICE: Record<Category, number> = {
  Produce: 2.75,
  Protein: 7.5,
  Dairy: 4.25,
  Pantry: 3.5,
  Frozen: 5.25,
  Snacks: 4.0,
  Household: 6.5,
  Condiments: 3.75,
  Drinks: 4.5,
  Other: 4.0,
};

/**
 * Estimate a base (in-store) price for each Need-to-Buy item, using the user's own
 * purchase history when available and a category fallback otherwise.
 */
export function buildDeliveryLineItems(entries: GroceryListEntry[], memory: GroceryMemoryItem[]): DeliveryLineItem[] {
  const priceByKey = new Map<string, number>();
  memory.forEach((item) => {
    const price = item.currentPrice || item.averagePrice;
    if (price > 0) priceByKey.set(normalizeIngredientKey(item.name), price);
  });

  return entries.map((entry) => {
    const known = priceByKey.get(normalizeIngredientKey(entry.name));
    return {
      name: entry.name,
      category: entry.category,
      basePrice: known ?? CATEGORY_BASE_PRICE[entry.category] ?? CATEGORY_BASE_PRICE.Other,
      estimated: known === undefined,
    };
  });
}

/**
 * Build a simple, comparable price quote per delivery provider for the current list.
 *
 * This is a prototype estimator: it applies each provider's typical item markup,
 * delivery fee, and service fee to the list's estimated base prices. A real
 * integration would call each provider's cart/quote API. Quotes are sorted by total
 * (cheapest first) and tagged with best-price and fastest flags.
 */
export function compareDeliveryQuotes(items: DeliveryLineItem[]): DeliveryQuote[] {
  const baseSubtotal = items.reduce((sum, item) => sum + item.basePrice, 0);

  const quotes: DeliveryQuote[] = PROVIDERS.map((provider) => {
    const itemsSubtotal = round(baseSubtotal * provider.itemMarkup);
    const serviceFee = round(itemsSubtotal * provider.serviceFeePct);
    const estimatedTotal = round(itemsSubtotal + provider.deliveryFee + serviceFee);
    return {
      providerId: provider.id,
      providerName: provider.name,
      fulfillment: provider.fulfillment,
      itemsSubtotal,
      deliveryFee: provider.deliveryFee,
      serviceFee,
      estimatedTotal,
      etaMinutes: provider.etaMinutes,
      itemCount: items.length,
      note: provider.note,
      url: provider.url,
      isBestPrice: false,
      isFastest: false,
    };
  });

  if (quotes.length > 0) {
    const cheapest = quotes.reduce((min, quote) => (quote.estimatedTotal < min.estimatedTotal ? quote : min));
    cheapest.isBestPrice = true;
    const fastest = quotes.reduce((min, quote) => (quote.etaMinutes < min.etaMinutes ? quote : min));
    fastest.isFastest = true;
  }

  return quotes.sort((a, b) => a.estimatedTotal - b.estimatedTotal);
}

export function formatEta(minutes: number): string {
  if (minutes >= 60) {
    const hours = minutes / 60;
    return Number.isInteger(hours) ? `~${hours} hr` : `~${hours.toFixed(1)} hr`;
  }
  return `~${minutes} min`;
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
