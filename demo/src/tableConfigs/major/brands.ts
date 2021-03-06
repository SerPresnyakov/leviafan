import {CrudTableConfig} from "../../../../modules/crudTableModule/src/CrudTableConfig";
import {StrField} from "../../../../modules/crudTableModule/src/fieldTypes/StrField";
import {IntField} from "../../../../modules/crudTableModule/src/fieldTypes/IntField";
import {TableRel} from "../../../../modules/crudTableModule/src/TableRel";
import {ObjField} from "../../../../modules/crudTableModule/src/fieldTypes/ObjField";
import {TableField} from "../../../../modules/crudTableModule/src/TableField";

export const table: CrudTableConfig = new CrudTableConfig("Бренды", "/api/refs/brand",{patch:true,create:true,delete:true})
    .setFields([
        new TableField("name", 'Название', new StrField(),false, false,"input"),
    ]);
