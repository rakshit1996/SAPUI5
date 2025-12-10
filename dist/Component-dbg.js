sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/ui/model/json/JSONModel"
],(UIComponent, JSONModel) => {
        "use strict";
      return  UIComponent.extend("ui5.walkthrough.Component",{
           metadata:{
                    interfaces: ["sap.ui.core.IAsyncContentCreation"],
                     manifest:"json"
                    },
           init(){
            UIComponent.prototype.init.apply(this, arguments);
               // set data
            const oData ={
                recepient:{
                    name : "",
                    age:"",
                    dateinfo:new Date().toLocaleDateString()
                },
                    
            };
           
            const oModel = new JSONModel(oData);
            // console.log(oModel);
            this.setModel(oModel);

            // create the views based on the url 
            try {
                this.getRouter().initialize();
            } catch (error) {
                console.log(error.message,"could not initialise the router")
            }
 
           }

        });

});