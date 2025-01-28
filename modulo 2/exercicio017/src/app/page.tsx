import { Table } from "@/components/Table"
import { students } from "@/data/students"

const Page = () => {
  return (
    <div>
      <Table students={students}/>
    </div>
  )
}

export default Page