document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "a3846e565f26498b9713f282b58cdc79",
    divId: "adobe-dc-view",
  });
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url: "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",
        },
      },
      metaData: { fileName: "Dummy File" },
    },
    {
      embedMode: "SIZED_CONTAINER",
    }
  );
});
