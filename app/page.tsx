import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants,  Button  } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function IndexPage() {
  return (

      
    <section className="flex h-screen bg-gray-100 dark:bg-gray-900">
    <nav className="w-64 bg-white dark:bg-gray-800 flex flex-col items-start justify-between p-4 shadow-lg">
      <div className="space-y-4">
        <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
          Dashboard
        </Link>
       
      </div>
      
    </nav>
    <main className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-28">
      <Card className="w-full md:w-3/4 max-w-2xl">
        <CardHeader>
         
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8">
          <Card className="ml-5 w-70 p-4 shadow-lg">
            <CardContent className="flex flex-col items-start justify-center space-y-4">
              <h2 className="text-lg font-bold">Balance Due</h2>
              <h2 className="text-4xl font-bold">$1200.00</h2>
              <p className="text-gray-500 dark:text-gray-400">John Doe</p>
            </CardContent>
          </Card>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{
                width: "60%",
              }}
            />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Credit Limit: $2000.00</p>
          <div className="flex space-x-4 mt-4">
            <Button className="bg-blue-500 text-white w-32">Deposit</Button>
            <Button className="bg-blue-500 text-white w-32">Borrow</Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col w-full md:w-1/2 max-w-md space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">My Friend's Club</CardTitle>
          </CardHeader>
          <CardContent>
            
            <Table className="w-full mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Friend 1</TableCell>
                  <TableCell>$1000.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friend 2</TableCell>
                  <TableCell>$1500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friend 3</TableCell>
                  <TableCell>$2000.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>01/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>03/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>04/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>05/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>06/01/2024</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  </section>
      
   
  )
}
