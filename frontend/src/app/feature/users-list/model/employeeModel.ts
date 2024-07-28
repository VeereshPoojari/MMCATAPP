export class EmployeeModels {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;  // Or Date if you prefer to use JavaScript Date objects
    email: string;
    phoneNumber: string;
    hireDate: string;  // Or Date
    salary: number;
    department: string;
    position: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactRelationship: string;
    pfAccountNumber: string;
    pfContribution: number;
    pfJoinDate: string;  // Or Date
    pfExitDate: string | null;  // Or Date | null
    organizationId: number;

    constructor(employee) {
        this.id = employee.id;
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.dateOfBirth = employee.dateOfBirth;
        this.email = employee.email;
        this.phoneNumber = employee.phoneNumber;
        this.hireDate = employee.hireDate;
        this.salary = employee.salary;
        this.department = employee.department;
        this.position = employee.position;
        this.emergencyContactName = employee.emergencyContactName;
        this.emergencyContactPhone = employee.emergencyContactPhone;
        this.emergencyContactRelationship = employee.emergencyContactRelationship;
        this.pfAccountNumber = employee.pfAccountNumber;
        this.pfContribution = employee.pfContribution;
        this.pfJoinDate = employee.pfJoinDate;
        this.pfExitDate = employee.pfExitDate;
        this.organizationId = employee.organizationId;
    }
}
