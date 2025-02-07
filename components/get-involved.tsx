import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, HandHeart, Users, Pencil } from 'lucide-react';
import Link from 'next/link';

export function GetInvolved() {
  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Get Involved</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Join us in making a difference. There are many ways you can contribute to
          our mission of supporting mothers and empowering young girls.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Heart className="mb-2 h-8 w-8 text-[#F4743B]" />
            <CardTitle>Donate</CardTitle>
            <CardDescription>Support our programs financially</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Your donation helps us provide essential services to mothers and
              educational support to young girls. Every contribution makes a difference.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Bank Transfer Details</h3>
                <p>Bank: First Bank of Nigeria</p>
                <p>Account Name: Mary Care Foundation</p>
                <p>Account Number: 1234567890</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <HandHeart className="mb-2 h-8 w-8 text-[#70AE6E]" />
            <CardTitle>Volunteer</CardTitle>
            <CardDescription>Share your time and skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We welcome volunteers in various capacities:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2">
              <li>Content Creation</li>
              <li>Social Media Management</li>
              <li>Event Organization</li>
              <li>Program Support</li>
            </ul>
            <Button asChild className="w-full bg-[#70AE6E] hover:bg-[#5a8e58]">
              <Link href="/contact">Apply to Volunteer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="mb-2 h-8 w-8 text-[#3C6E71]" />
            <CardTitle>Partner With Us</CardTitle>
            <CardDescription>Collaborate for greater impact</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We're always looking to partner with organizations that share our vision:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2">
              <li>Healthcare Facilities</li>
              <li>Educational Institutions</li>
              <li>NGOs and Foundations</li>
              <li>Corporate Organizations</li>
            </ul>
            <Button asChild className="w-full bg-[#3C6E71] hover:bg-[#2a4e50]">
              <Link href="/contact">Discuss Partnership</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Pencil className="mb-2 h-8 w-8 text-[#BEEE62]" />
            <CardTitle>Share Your Story</CardTitle>
            <CardDescription>Help inspire others</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you've been impacted by our programs, we'd love to hear your story:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2">
              <li>Program Testimonials</li>
              <li>Success Stories</li>
              <li>Community Impact</li>
              <li>Personal Experiences</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}