window.onload = function () {

    
(function () {

    var oTons = document.getElementById('tons')
    var oMj = document.getElementById('mjl');
    var oAs = document.getElementById('as');
    var a,b,c,d;
    d = 'transition: 0s;'
    c = 'visibility:hidden;'
    b = 'visibility: visible;'
    a =  'margin-top:1%;transition: 1s;transform: translate(0, 6%);-webkit-transition: all 0.5s 0.1s;'

    setTimeout(() => {
       
            oMj.style.cssText = 'display:none;'
            oAs.style.cssText = '    position: absolute;right: 0%;'
            oTons.style.cssText = ' visibility:visible;transform: translate(0%, 0%);transition: all 0.5s ease 0.1s;display: block;display: flex;justify-content: space-between;'
        
    }, 1500);

    clearTimeout()
    oAs.onclick = function () {
       oMj.style.cssText = 'display:block;'
        oAs.style.cssText = '    position: absolute;right: 0%;'
        oTons.style.cssText = ' visibility:visible;transform: translate(0%, -100%);transition: all 0.5s ease 0.1s;display: block;display: flex;justify-content: space-between;'
    }
    oMj.onclick = function () {
        oMj.style.cssText = 'display:none;'
        oAs.style.cssText = '    position: absolute;right: 0%;'
        oTons.style.cssText = ' visibility:visible;transform: translate(0%, 0%);transition: all 0.5s ease 0.1s;display: block;display: flex;justify-content: space-between;'
    }
    var oLi1 = document.getElementById('li1')
    var oLi2 = document.getElementById('li2')
    var oLi3 = document.getElementById('li3')
    var oLi4 = document.getElementById('li4')
    var oLi5 = document.getElementById('li5')

    var heid = document.getElementById('tunf');
    var heids = document.getElementById('tunfs');
    var heidd = document.getElementById('tunfd');
    var heidm = document.getElementById('tunfm');
    var heidl = document.getElementById('tunfl');

    var oHe = document.getElementById('sheiddn')
    var oMl = document.getElementById('uml')
    var oMs = document.getElementById('umls')
    var oMd = document.getElementById('umld')
    var oMm = document.getElementById('umlm')
    var oMll = document.getElementById('umll')
    var oIma = document.getElementById('imgsn')
    var Ospm = document.getElementById('somf')

        oLi1.onmousemove = function() {
            heid.style.cssText = b;
            oHe.style.cssText = b;
            oMl.style.cssText ='padding-top: 0;margin-top:0%;transition: 1s;transform: translate(0%, 6%);-webkit-transition: all 0.5s 0.1s'
            oIma.style.cssText = 'width:60%; transition: 1s;margin-top:24px;'
            Ospm.style.cssText = 'display:block;width:100%;left:0; transition: 0.5s;position:absolute;right:0;translate(0, 100%);-webkit-transition: all 0.5s 1s'
           
        }
        oLi1.onmouseout = function () {
            heid.style.cssText = c;
            oHe.style.cssText = c;
            oMl.style.cssText = 'transition: 0s;'
            oIma.style.cssText = 'transition: 0.5s;'
            Ospm.style.cssText = 'width:100%; transition: 0.01s;'
        }
        oLi2.onmousemove = function () {
            heids.style.cssText = b;
            oHe.style.cssText = b;
            oMs.style.cssText = a;
            

        }
        oLi2.onmouseout = function () {
        heids.style.cssText = c;
            oHe.style.cssText = c;
        oMs.style.cssText = d;

    }
    oLi3.onmousemove = function() {
        heidd.style.cssText = b;
        oHe.style.cssText = b;
        oMd.style.cssText = a;
        
    }
    oLi3.onmouseout = function () {
        heidd.style.cssText = c;
        oHe.style.cssText = c;
        oMd.style.cssText = d;
      
    }
    oLi4.onmousemove = function () {
        heidm.style.cssText = b;
        oHe.style.cssText = b;
        oMm.style.cssText = a;
    }
    oLi4.onmouseout = function () {
        heidm.style.cssText = c;
        oHe.style.cssText = c;
        oMm.style.cssText = d;
    }
    oLi5.onmousemove = function () {
        heidl.style.cssText = b;
        oHe.style.cssText = b;
        oMll.style.cssText = a

    }
    oLi5.onmouseout = function () {
        heidl.style.cssText = c;
        oHe.style.cssText = c;
        oMll.style.cssText = d;
 
    }
})();




        var oU = document.getElementById('u');
        var Ol = oU.getElementsByTagName('li')
        var oDh = document.getElementById('dd');
        var oDS = document.getElementById('dds'); 
        var oDD = document.getElementById('ddd');
        var oDDG = document.getElementById('dddg');
  
        for(i=0;i<Ol.length;i++){
            
            Ol[0].onmousemove = function () {
                oDh.style.display = 'block'
            }
            Ol[1].onmousemove = function () {
                oDS.style.display = 'block'
            }
            Ol[2].onmousemove = function () {
                oDD.style.display = 'block'
            }
            Ol[3].onmousemove = function () {
                oDDG.style.display = 'block'
            }


            // ////////////

            Ol[0].onmouseout = function () {
                setTimeout(() => {
                   oDh.style.display = 'none'
                }, 200);
            }

            Ol[1].onmouseout = function () {
                setTimeout(() => {
                    oDS.style.display = 'none'
                }, 200);
            }

            Ol[2].onmouseout = function () {
                setTimeout(() => {
                    oDD.style.display = 'none'
                }, 200);
            }

            Ol[3].onmouseout = function () {
                setTimeout(() => {
                    oDDG.style.display = 'none'
                }, 200);
            }
        }
           
        
        function myFunction(Mi,Ns){
            this.Mi = Mi;
            this.Ns = Ns;

        }
    my = new myFunction('display:block;','display:none;')            
        
       document.getElementById('mi').onclick = function(){
        document.getElementById('qo').style.cssText = my.Mi;
        document.getElementById('btns').style.cssText = my.Ns
       }


    }




