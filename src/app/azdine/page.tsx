// "use client";
// import React from "react";
// import styles from "./azdine.module.css";
// import { GiTechnoHeart } from "react-icons/gi";

// export default function Azdine() {
//   fetch()
//   return (
//     <div>
//       <GiTechnoHeart />
//       <h1 className={styles.az}>azdine</h1>
//     </div>
//   );
// }

// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// export default function Azdine() {
//   return (
//     <RadioGroup defaultValue="comfortable">
//       <div className="flex items-center space-x-2">
//         <RadioGroupItem value="default" id="r1" />
//         <Label htmlFor="r1">Default</Label>
//       </div>
//       <div className="flex items-center space-x-2">
//         <RadioGroupItem value="comfortable" id="r2" />
//         <Label htmlFor="r2">Comfortable</Label>
//       </div>
//       <div className="flex items-center space-x-2">
//         <RadioGroupItem value="compact" id="r3" />
//         <Label htmlFor="r3">Compact</Label>
//       </div>
//     </RadioGroup>
//   )
// }
import React, { Suspense } from 'react'
import Image from 'next/image'
import Masque from '../../../public/darck-mode.jpg' 
import { DialogDemo } from '@/components/dialogue/DialogDemo'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'

export default function Azdine() {
  
  return (
    <div>
     <div className="flex items-center space-x-4 bg-red-600">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>

      {/* <Link to="/admin">admine page</Link> */}
      <Image src={Masque} alt="darck" width={500} height={500}  className="hover:flex-1"/>
      <DialogDemo/>
<Suspense fallback={<div>Loading...</div>}>
  
</Suspense>
    </div>
  )
}