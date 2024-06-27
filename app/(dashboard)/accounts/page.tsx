"use client";

import { Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "a@example.com",
  },
  {
    id: "718ed52f",
    amount: 100,
    status: "success",
    email: "m@example.com",
  },
  {
    id: "758ed52f",
    amount: 100,
    status: "failed",
    email: "b@example.com",
  },
  {
    id: "768ed52f",
    amount: 100,
    status: "processing",
    email: "c@example.com",
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm ">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button size="sm" onClick={newAccount.onOpen}>
            <Plus className="size-4 mr-2" />
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} filterKey="email" onDelete={() => {}}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
