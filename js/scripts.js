$(document).ready(function() {
  $("form#package-input").submit(function(event) {
    event.preventDefault();

    var inputtedLength = parseFloat($("input#package-length").val());
    var inputtedWidth = parseFloat($("input#package-width").val());
    var inputtedHeight = parseFloat($("input#package-height").val());
    var inputtedWeight = parseFloat($("input#package-weight").val());

    var newPackage = { length: inputtedLength,
                       width: inputtedWidth,
                       height: inputtedHeight,
                       weight: inputtedWeight,
                       packageVolume: function() {
                         return (this.length * this.width * this.height);
                       }
                     };

    var shippingCost = { weightCost: (newPackage.weight * .4),
                         volumeCost: (newPackage.packageVolume() * .05)
                         };

    if (shippingCost.weightCost > shippingCost.volumeCost) {
      $("#package-cost h5").text(shippingCost.weightCost);
    } else {
      $("#package-cost h5").text(shippingCost.volumeCost);
    }
  });
});
