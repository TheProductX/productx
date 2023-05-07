document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "a3846e565f26498b9713f282b58cdc79",
    divId: "adobe-dc-view",
  });
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url: "https://pdfhost.io/edit?doc=574cbe8f-0972-44ff-8ef6-f8f6f5359aea",
        },
      },
      metaData: { fileName: "ProductX" },
    },
    {
      embedMode: "SIZED_CONTAINER",
    }
  );
});
