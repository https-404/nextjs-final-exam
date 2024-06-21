import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import Register from "@/app/ui/customers/register";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <Register/>
      <CustomersTable customers={customers} />
    </main>
  );
}
