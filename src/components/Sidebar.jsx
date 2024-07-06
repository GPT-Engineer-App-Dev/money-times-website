import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Sidebar = () => {
  return (
    <div className="w-64 p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>#StockMarket</li>
            <li>#GlobalEconomy</li>
            <li>#TechStocks</li>
            <li>#CryptoNews</li>
            <li>#FinancialPolicy</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Newsletter Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-2">
            <Input type="email" placeholder="Your email" />
            <Button className="w-full">Subscribe</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Advertisement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Ad Space
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;