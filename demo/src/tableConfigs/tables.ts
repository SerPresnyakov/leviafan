import {StrField} from "../../../modules/crudTableModule/src/fieldTypes/StrField";
import {CrudTableConfig} from "../../../modules/crudTableModule/src/CrudTableConfig";
import {TableField} from "../../../modules/crudTableModule/src/TableField";

export const table: CrudTableConfig = new CrudTableConfig("Таблицы", "/pureRest/resource",["PATCH"])
    .setFields([
        new TableField("name", 'Название', new StrField(), false,false, "input"),
        new TableField("tableName", 'Имя таблицы', new StrField(), false,false, "input"),
        new TableField("url", 'URL', new StrField(), false,false, "input")
    ]);