import { NextRequest, NextResponse } from "next/server";
import { IEmployee } from "@/core/interfaces/IEmployee";
import axios, { AxiosResponse } from "axios";

export async function POST(req: NextRequest) {

    //API olarak graphql-fakers kullanarak fake datalar almak için api ye axios yöntemi ile post atıyorum.
    try {
        const query = {
            query: `
                query {
                    employees {
                        firstName
                        lastName
                        email
                        image
                        phone
                        vote
                        address
                        salary
                        hireDate
                        department
                        jobTitle
                        userID
                    }
                }
            `,
        };

        const employeesRes: AxiosResponse<{ data: { employees: IEmployee[] } }> = await axios.post(
            "http://graphql-faker:9002/graphql",
            query
        );

        const employeeData: IEmployee[] = employeesRes.data.data.employees;

        return NextResponse.json(employeeData);
    } catch (error) {
        console.error("Error fetching employees:", error);
        return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
    }
}