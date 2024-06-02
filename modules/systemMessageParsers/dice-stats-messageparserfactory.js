import { PF1E_SYSTEM_MESSAGE_PARSER } from "./pf1eSystemMessageParser";
import { PF2E_SYSTEM_MESSAGE_PARSER } from "./pf2eSystemMessageParser";
import { DND5E_SYSTEM_MESSAGE_PARSER } from "./dnd5eSystemMessageParser";
import { DRAGONBANE_SYSTEM_MESSAGE_PARSER } from "./dragonbaneSystemMessageParser";
import { GENERIC_SYSTEM_MESSAGE_PARSER } from "./genericSystemMessageParser";

/**
 * Get message parser based off the system we're using
 */
export class MESSAGE_PARSER_FACTORY  {
    
    /* Create a message parser object bassed on the current system Different systems need to do different stuff to parse the msg*/
    static createMessageParser(systemid)
    {
        if(!systemid){
            systemid = game.system.id
        }

        switch(systemid)
        {
            case "pf1":
                return new PF1E_SYSTEM_MESSAGE_PARSER;
            case "pf2e" :
                return new PF2E_SYSTEM_MESSAGE_PARSER;
            case "dnd5e" :
                return new DND5E_SYSTEM_MESSAGE_PARSER;
            case "dragonbane" :
                return new DRAGONBANE_SYSTEM_MESSAGE_PARSER;
            
            case "daggerheart" :
            case "mcdmrpg" : 
            default :
                return new GENERIC_SYSTEM_MESSAGE_PARSER;
        }
    }
}