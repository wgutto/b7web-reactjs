import { Student } from "@/types/Student"

type Props = {
    students: Student[]
}

export const Table = ({students}: Props) => {

    return (
        <div className="w-screen h-screen p-4">
            <table className="w-full text-center rounded-md overflow-hidden">
                <thead>
                    <tr className="bg-gray-800">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 hidden sm:table-cell">Status</th>
                        <th className="p-2">Grade 1</th>
                        <th className="p-2">Grade 2</th>
                        <th className="p-2">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item => (
                        <tr key={item.id} className="bg-gray-400 text-gray-900 border-b border-gray-600">
                            <td className="flex items-center text-left gap-3 p-4">
                                <img className="hidden w-14 h-14 rounded-full md:block" src={item.avatar} alt="" />
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="hidden sm:block">{item.email}</p>
                                </div>
                            </td>
                            <td className="hidden sm:table-cell">
                                {item.active && 
                                    <p className="bg-green-700 text-[12px] text-white font-bold px-2 py-1 rounded-md">Active</p>
                                }
                                
                                {!item.active &&
                                    <p className="bg-red-700 text-[12px] text-white font-bold px-2 py-1 rounded-md">Inactive</p>
                                }
                            </td>

                            <td>{item.grade1}</td>
                            <td>{item.grade2}</td>

                            <td className="font-bold">
                                {item.active ? ((item.grade1 + item.grade2) / 2).toFixed(2) : '--'}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}