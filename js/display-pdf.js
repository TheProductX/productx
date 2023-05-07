document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "a3846e565f26498b9713f282b58cdc79",
    divId: "adobe-dc-view",
  });
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url: "file:///Users/rajshekhar.singh/Downloads/ProductX.pdf",
        },
      },
      metaData: { fileName: "ProductX" },
    },
    {
      embedMode: "SIZED_CONTAINER",
    }
  );
});
