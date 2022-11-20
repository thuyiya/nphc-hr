import csv from "csvtojson";
import { EmployeeType} from '../models/app' 

const  csvToJson = async (csvStr: any) => {
    return new Promise((resolve, reject) => {
        csv({
            noheader:true,
            output: "csv"
        })
        .fromString(csvStr)
        .then((csvRow)=>{ 
            resolve(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
        })
    })
}

const madeEmployee = (csvArray: any) => {
    let employees: any = []
    if(csvArray && csvArray.length > 0) {
        csvArray.map((item: Array<string>) => {
            employees.push({
                full_name: item[2],
                login_id: item[1],
                salary: item[3]
            })
        })
    }

    return employees as Array<EmployeeType>;
}

export { csvToJson, madeEmployee };
