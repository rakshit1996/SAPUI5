sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/Filter', 
    'sap/ui/model/FilterOperator'
],(Controller,JSONModel,Filter,FilterOperator)=>{
    "user strict"

   return Controller.extend("ui5.walkthrough.controller.InvoiceList",{
        onInit(){

            // create an O data model for currency since this is not there in the data model
            const oViewModel = new JSONModel({ 
                                                currency:"EUR"
                                             })
                                             
               this.getView().setModel(oViewModel,"view");
        },
        
		onFilterInvoices(oEvent) {
            // create a filter array
		 const aFilter =[]
         const sQuery = oEvent.getParameter("query"); // get the entry from the search field
         if(sQuery){
            aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery ));
         }
         const oList = this.byId("InvoiceList");
         const oBinding = oList.getBinding("items");
         oBinding.filter(aFilter);
         
		},
        onPress(oEvent) {
            const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail",{
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substring(1))
            });
		}
    });
});