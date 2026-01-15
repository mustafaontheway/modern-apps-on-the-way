function setEmployee(name: string, id: string, salaryTL: number) : [string, string, number] {

    return [name, id, salaryTL]
}

let empAyhan = setEmployee("Ayhan Bilir", "ab004296", 55_000)

console.log("ID of emp Ayhan:", empAyhan[1]) // ID of emp Ayhan: ab004296
