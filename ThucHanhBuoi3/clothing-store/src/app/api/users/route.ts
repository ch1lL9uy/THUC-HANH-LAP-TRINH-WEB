import { NextResponse } from 'next/server';

const heroImages = [
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
  },
];

export async function GET() {
  return NextResponse.json(heroImages);
}
