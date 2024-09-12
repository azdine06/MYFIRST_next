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
import React from 'react'
import Image from 'next/image'
import Masque from '../../../public/darck-mode.jpg' 
import { DialogDemo } from '@/components/dialogue/DialogDemo'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Azdine() {
  const[]
  return (
    <div>
      <p>Azdine page</p>
      <Image src={Masque} alt='darck' width={500} height={500} />
      <DialogDemo/>

    </div>
  )
}

