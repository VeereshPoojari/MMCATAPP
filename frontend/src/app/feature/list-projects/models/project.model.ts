export class ProjectModels {
    id: number;
    name: string;
    projectUrl: string;
    envirnMent:string;
    constructor(project) {
        this.id=project.id;
        this.name = project.name;
        this.projectUrl=project.projectUrl;
        this.envirnMent=project.envirnMent;

    }
}