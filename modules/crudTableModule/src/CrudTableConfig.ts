import {TableField} from "./TableField";
import {TableRel} from "./TableRel";
import {ObjField} from "./fieldTypes/ObjField";

export class CrudTableConfig {

    fields: TableField[] = [];
    rels: TableRel[] = [];
    tab = {selected:null,tabs:[]};

    constructor(
        public sourceName: string,
        public url: string,
        public allowedMethods:any
    ) {
    }


    setFields(fields: TableField[]): CrudTableConfig {
        this.fields = fields;
        return this;
    }

    setRels(rels: TableRel[]): CrudTableConfig {
        this.rels = rels;
        return this
    }

    setTabs(tabs): CrudTableConfig {
        this.tab.tabs = tabs;
        return this
    }

    getRel(fieldName: string): TableRel {
        return this.rels.find((r) => r.name == fieldName)
    }

    getField(fieldName: string): TableField {
        return this.fields.find((r) => r.name == fieldName)
    }

    getIncludes(){
        let res=[];
        this.rels.forEach((r)=> {
            if(r.isInclude)res.push(r.field);
        });
        return res;
    }

    getSelectedTab(){
        this.tab.tabs.forEach((t,i)=>{
            if(t.selected){
                this.tab.selected=i;
            }
        });
    }


}