import { NextResponse } from 'next/server';

const HERO_IMAGES = [
  {
    id: 'main',
    src: '/products/item1.png',
    alt: 'White outfit collection',
    priority: true,
  },
  {
    id: 'secondary',
    src: '/products/item2.png',
    alt: 'Black t-shirt collection',
    priority: false,
  },
];

export async function GET() {
  return NextResponse.json(HERO_IMAGES);
}
