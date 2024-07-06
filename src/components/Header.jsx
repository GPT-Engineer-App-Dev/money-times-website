import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold mr-8">Financial Times</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/markets" className="text-gray-600 hover:text-gray-900">Markets</Link></li>
            <li><Link to="/economy" className="text-gray-600 hover:text-gray-900">Economy</Link></li>
            <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Work & Careers</Link></li>
            <li><Link to="/arts" className="text-gray-600 hover:text-gray-900">Life & Arts</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Input type="search" placeholder="Search..." className="w-64" />
        <Button variant="outline">Search</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;