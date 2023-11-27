import { BulkCreateFunction, FetchEntitiesFunction, IBulkCreateEntitiesBody } from "../../models";
import { Surfy } from "../../schema/surfy.models.generated";

export function createPeople(createBulk: BulkCreateFunction) {
    const peopleBody: IBulkCreateEntitiesBody<Surfy.Person> = {
        objectTypeName: 'person',
        entities: [
            { firstname: 'FN1', lastname: 'LN1', title: 'T1', code: 'C1' },
            { firstname: 'FN2', lastname: 'LN2', title: 'T2', code: 'C2' }
        ]
    }
    createBulk(peopleBody);

}