const nitrox = {
  ata: function(depth){
    return ((depth / 10) + 1).toFixed(2)
  },
  mod: function(ppO2, ean){
    return (ppO2 / (ean / 100) * 10 - 10).toFixed(2)
  },
  fo2: function(ean){
    return  (ean / 100).toFixed(2)
  },
  fn2: function(ean){
    return  ((100 - ean) / 100).toFixed(2)
  },
  ean: function(FO2){
    return  (FO2 * 100).toFixed(0)
  },
  bestMix: function(ppO2, ata){
    return ((ppO2 / ata) * 100).toFixed(0)
  },
  ead: function (depth,fn2){
    return ((depth + 10) * fn2 / 0.79 - 10).toFixed(1)
  },
  appO2: function(ata,fo2){
    return ata * fo2
  }
}

export default nitrox;