import { NextRequest, NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

// SQL query to fetch invoices and customer names
const query = `
  SELECT invoices.amount, customers.name
  FROM invoices
  JOIN customers ON invoices.customer_id = customers.id
  WHERE invoices.amount = 666;
`;

export async function GET(request: NextRequest) {
  try {
    // Execute the query
    const result = await db.query(query);
    const invoices = result.rows;

    // Return the results in JSON format
    return NextResponse.json({ invoices });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
