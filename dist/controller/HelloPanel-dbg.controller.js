sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controller,MessageToast)=>{
    "use strict";
   return Controller.extend("ui5.walkthrough.controller.HelloPanel",{
        onShowHello(){
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecepient = this.getView().getModel().getProperty("/recepient/name");
            const sDate = this.getView().getModel().getProperty("/recepient/dateinfo");
            const sage = this.getView().getModel().getProperty("/recepient/age");
            const msg = oBundle.getText("helloMsg",[sRecepient,sage,sDate]);

            MessageToast.show(msg);

        },
        onGetDate(){
          const currentdate = new Date().toLocaleDateString()
          MessageToast.show(`Todays Date is ${currentdate}`);
        },
        async onMarkAsRead(){
            
            this.oDialog ??=  await this.loadFragment({
                name: "ui5.walkthrough.view.MarkedDialog"
            });
             this.oDialog .open();
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog1").close();
		}
    })

})