import React, { Suspense } from "react";
import Image from "next/image";
import Masque from "../../../public/darck-mode.jpg";
import { DialogDemo } from "@/components/dialogue/DialogDemo";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Azdine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Azdine Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore the power of modern UI components with shadcn/ui.
        </p>
      </header>

      {/* Skeleton Loader */}
      <section className="flex items-center space-x-4 bg-red-600 p-4 rounded-lg mb-8">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </section>

      {/* Image and Dialog */}
      <section className="mb-8 text-center">
        <Image src={Masque} alt="Dark mode illustration" width={500} height={500} className="rounded-lg shadow-lg mx-auto hover:scale-105 transition-transform duration-300" />
        <div className="mt-6">
          <DialogDemo />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mb-8">
        <Tabs defaultValue="info" className="w-full max-w-3xl mx-auto">
          <TabsList>
            <TabsTrigger value="info">Information</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="p-4">
            <p className="text-gray-800 dark:text-gray-300">
              This is a demo page showcasing the components from shadcn/ui. It's designed to be interactive, visually appealing, and modern.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="p-4">
            <form className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button type="submit">Save Settings</Button>
            </form>
          </TabsContent>
          <TabsContent value="contact" className="p-4">
            <p className="text-gray-800 dark:text-gray-300">For inquiries, please contact us at support@example.com.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>A short description of feature one.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              This is a simple example of using a card component for displaying features or sections.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
            <CardDescription>A short description of feature two.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Cards can be used to group content and make your page more structured.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature Three</CardTitle>
            <CardDescription>A short description of feature three.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Experiment with different layouts and styles using the card component.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
