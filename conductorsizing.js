<script type="text/javascript">
function myFunction(form) {
    var x = form.ref.value;
    var c = document.getElementById("ctype");
    var d = document.getElementById("dtype");
    var et = document.getElementById("etype");
    var ef = document.getElementById("eftype");
    var un = document.getElementById("unspac");
    var res = document.getElementById("res");
    var efi = document.getElementById("efins");
    var txtres = document.getElementById("textres");
    var txtlay = document.getElementById("textlay");
    var nlay = document.getElementById("nlay");
    var txtund = document.getElementById("textund");
    var txtgr = document.getElementById("textgr");
    var ngr = document.getElementById("ngr");
    var nas= document.getElementById("nas");
    var grp= document.getElementById("gr");
    var num = parseFloat(form.gr.value);
    var fload= parseFloat(form.fload.value);
    var nuc = parseFloat(form.numc.value);
    var k, k1 , k2, k3, k4;
    if (x==1 || x==2){
     c.style.display = "none";
        d.style.display = "none";
        ef.style.display = "none";
        et.style.display = "none";
        un.style.display = "none";
        res.style.display = "none";
        nat.style.display = "none";
        txtres.style.display = "none";
        txtlay.style.display = "none";
        nlay.style.display = "none";
        txtund.style.display = "none";
        txtgr.style.display = "none";
        ngr.style.display = "none";
        efi.style.display = "none";
        nas.style.display = "none";
        grp.style.display = "block";
        document.getElementById("amtemp").innerHTML = "Ambient temperature:";
        k1 = tempf(form);
        switch (num){
         case 1:
             k2=1;
            break;
            case 2:
             k2=0.8;
            break;
            case 3:
             k2=0.7;
            break;
            case 4:
             k2=0.65;
            break;
            case 5:
             k2=0.6;
            break;
            case 6:
             k2=0.57;
            break;
            case 7:
             k2=0.54;
            break;
            case 8:
             k2=0.52;
            break;
            case 9:
             k2=0.5;
            break;
            case 12:
             k2=0.45;
            break;
            case 16:
             k2=0.41;
            break;
            case 20:
             k2=0.38;
            break;
        }
        k=k1*k2;
    }
    else if (x==3){
     c.style.display = "block";
        d.style.display = "none";
        ef.style.display = "none";
        un.style.display = "none";
        res.style.display = "none";
        nat.style.display = "none";
        txtres.style.display = "none";
        txtlay.style.display = "none";
        nlay.style.display = "none";
        txtund.style.display = "none";
        txtgr.style.display = "none";
        ngr.style.display = "none";
        efi.style.display = "none";
        nas.style.display = "none";
        grp.style.display = "block";
        et.style.display = "none";
        document.getElementById("amtemp").innerHTML = "Ambient temperature:";
        k1 = tempf(form);
        var typ = parseFloat(form.ctype.value);
        switch (num){
         case 1:
             if (typ == 1){
              k2=1;
                }
                else if (typ == 2){
              k2=0.95;
                }
            break;
            case 2:
             if (typ == 1){
              k2=0.85;
                }
                else if (typ == 2){
              k2=0.81;
                }
            break;
            case 3:
             if (typ == 1){
              k2=0.79;
                }
                else if (typ == 2){
              k2=0.72;
                }
            break;
            case 4:
             if (typ == 1){
              k2=0.75;
                }
                else if (typ == 2){
              k2=0.68;
                }
            break;
            case 5:
             if (typ == 1){
              k2=0.73;
                }
                else if (typ == 2){
              k2=0.66;
                }
            break;
            case 6:
             if (typ == 1){
              k2=0.72;
                }
                else if (typ == 2){
              k2=0.64;
                }
            break;
            case 7:
             if (typ == 1){
              k2=0.72;
                }
                else if (typ == 2){
              k2=0.63;
                }
            break;
            case 8:
             if (typ == 1){
              k2=0.71;
                }
                else if (typ == 2){
              k2=0.62;
                }
            break;
            case 9:
             if (typ == 1){
              k2=0.70;
                }
                else if (typ == 2){
              k2=0.61;
                }
            break;
            case 12:
             if (typ == 1){
              k2=0.70;
                }
                else if (typ == 2){
              k2=0.61;
                }
            break;
            case 16:
             if (typ == 1){
              k2=0.70;
                }
                else if (typ == 2){
              k2=0.61;
                }
            break;
            case 20:
             if (typ == 1){
              k2=0.70;
                }
                else if (typ == 2){
              k2=0.61;
                }
            break;
        }
        k=k1*k2;
    }
    else if (x==4){
     c.style.display = "none";
        d.style.display = "block";
        ef.style.display = "none";
        un.style.display = "block";
        res.style.display = "block";
        nat.style.display = "block";
        txtres.style.display = "block";
        txtlay.style.display = "none";
        nlay.style.display = "none";
        txtund.style.display = "block";
        txtgr.style.display = "none";
        ngr.style.display = "none";
        efi.style.display = "none";
        nas.style.display = "block";
        grp.style.display = "block";
        document.getElementById("amtemp").innerHTML = "Soil temperature:";
        k1 = tempd(form);
        var res = parseFloat(form.res.value);
        var typ = parseFloat(form.dtype.value);
        var k4 = parseFloat(form.nat.value);
        var num = parseFloat(form.gr.value);
        switch (res){
         case 1:
             if (typ == 1){
              k2=1.28;
                }
                else if (typ == 2){
              k2=1.88;
                }
            break;
            case 2:
             if (typ == 1){
              k2=1.20;
                }
                else if (typ == 2){
              k2=1.62;
                }
            break;
            case 3:
             if (typ == 1){
              k2=1.18;
                }
                else if (typ == 2){
              k2=1.5;
                }
            break;
            case 4:
             if (typ == 1){
              k2=1.1;
                }
                else if (typ == 2){
              k2=1.28;
                }
            break;
            case 5:
             if (typ == 1){
              k2=1.05;
                }
                else if (typ == 2){
              k2=1.12;
                }
            break;
            case 6:
             if (typ == 1){
              k2=1;
                }
                else if (typ == 2){
              k2=1;
                }
            break;
            case 7:
             if (typ == 1){
              k2=0.96;
                }
                else if (typ == 2){
              k2=0.90;
                }
            break;
        }
        var sp = parseFloat(form.unspac.value);
        switch (num){
         case 1:
             k3=1;
            break;
            case 2:
             switch(sp){
                 case 1:
                     k3 = 0.75;
                    break;
                    case 2:
                     k3 = 0.8;
                    break;
                    case 3:
                     k3 = 0.85;
                    break;
                    case 4:
                     k3 = 0.9;
                    break;
                    case 5:
                     k3 = 0.9;
                    break;
                }
            break;
            case 3:
             switch(sp){
                 case 1:
                     k3 = 0.65;
                    break;
                    case 2:
                     k3 = 0.7;
                    break;
                    case 3:
                     k3 = 0.75;
                    break;
                    case 4:
                     k3 = 0.8;
                    break;
                    case 5:
                     k3 = 0.85;
                    break;
                }
            break;
            case 4:
             switch(sp){
                 case 1:
                     k3 = 0.60;
                    break;
                    case 2:
                     k3 = 0.60;
                    break;
                    case 3:
                     k3 = 0.70;
                    break;
                    case 4:
                     k3 = 0.75;
                    break;
                    case 5:
                     k3 = 0.80;
                    break;
                }
            break;
            case 5:
             switch(sp){
                 case 1:
                     k3 = 0.55;
                    break;
                    case 2:
                     k3 = 0.55;
                    break;
                    case 3:
                     k3 = 0.65;
                    break;
                    case 4:
                     k3 = 0.70;
                    break;
                    case 5:
                     k3 = 0.80;
                    break;
                }
            break;
            case 6:
             switch(sp){
                 case 1:
                     k3 = 0.50;
                    break;
                    case 2:
                     k3 = 0.55;
                    break;
                    case 3:
                     k3 = 0.60;
                    break;
                    case 4:
                     k3 = 0.70;
                    break;
                    case 5:
                     k3 = 0.80;
                    break;
                }
            break;
            case 7:
             switch(sp){
                 case 1:
                     k3 = 0.45;
                    break;
                    case 2:
                     k3 = 0.51;
                    break;
                    case 3:
                     k3 = 0.59;
                    break;
                    case 4:
                     k3 = 0.67;
                    break;
                    case 5:
                     k3 = 0.76;
                    break;
                }
            break;
            case 8:
             switch(sp){
                 case 1:
                     k3 = 0.43;
                    break;
                    case 2:
                     k3 = 0.48;
                    break;
                    case 3:
                     k3 = 0.57;
                    break;
                    case 4:
                     k3 = 0.65;
                    break;
                    case 5:
                     k3 = 0.75;
                    break;
                }
            break;
            case 9:
             switch(sp){
                 case 1:
                     k3 = 0.41;
                    break;
                    case 2:
                     k3 = 0.46;
                    break;
                    case 3:
                     k3 = 0.55;
                    break;
                    case 4:
                     k3 = 0.63;
                    break;
                    case 5:
                     k3 = 0.74;
                    break;
                }
            break;
            case 12:
             switch(sp){
                 case 1:
                     k3 = 0.36;
                    break;
                    case 2:
                     k3 = 0.42;
                    break;
                    case 3:
                     k3 = 0.51;
                    break;
                    case 4:
                     k3 = 0.59;
                    break;
                    case 5:
                     k3 = 0.71;
                    break;
                }
            break;
            case 16:
             switch(sp){
                 case 1:
                     k3 = 0.32;
                    break;
                    case 2:
                     k3 = 0.38;
                    break;
                    case 3:
                     k3 = 0.47;
                    break;
                    case 4:
                     k3 = 0.56;
                    break;
                    case 5:
                     k3 = 0.38;
                    break;
                }
            break;
            case 20:
             switch(sp){
                 case 1:
                     k3 = 0.29;
                    break;
                    case 2:
                     k3 = 0.35;
                    break;
                    case 3:
                     k3 = 0.44;
                    break;
                    case 4:
                     k3 = 0.53;
                    break;
                    case 5:
                     k3 = 0.66;
                    break;
                }
            break;
        }
        k=k1*k2*k3*k4;
    }
    else if (x==5){
     c.style.display = "none";
        d.style.display = "none";       
        un.style.display = "none";
        res.style.display = "none";
        nat.style.display = "none";
        txtres.style.display = "none";
        txtlay.style.display = "none";
        nlay.style.display = "none";
        txtund.style.display = "none";
        txtgr.style.display = "none";
        ngr.style.display = "none";
        nas.style.display = "none";
        grp.style.display = "block";
        document.getElementById("amtemp").innerHTML = "Ambient temperature:";
        var gr = parseFloat(form.gr.value);
        var sp; 
       k1 = tempf(form);
        if (nuc == 1){
          ef.style.display = "none";
          et.style.display = "none";                   
          efi.innerHTML = "Method E is for multi-core cables only"; 
          efi.style.display = "block"; 
        }
        else if (nuc == 2){
            et.style.display = "block";
            ef.style.display = "none";
            efi.style.display = "none";
            sp = parseFloat(form.etype.value);
            switch (gr){
            case 1:
             k3=1;
            break;
            case 2:
             switch(sp){
                 case 1:
                     k3 = 0.8;
                    break;
                    case 2:
                     k3 = 0.88;
                    break;
                    case 3:
                     k3 = 0.87;
                    break;
                }
            break;
            case 3:
             switch(sp){
                 case 1:
                     k3 = 0.7;
                    break;
                    case 2:
                     k3 = 0.82;
                    break;
                    case 3:
                     k3 = 0.82;
                    break;
                }
            break;
            case 4:
             switch(sp){
                 case 1:
                     k3 = 0.65;
                    break;
                    case 2:
                     k3 = 0.77;
                    break;
                    case 3:
                     k3 = 0.80;
                    break;
                }
            break;
            case 5:
             switch(sp){
                 case 1:
                     k3 = 0.60;
                    break;
                    case 2:
                     k3 = 0.75;
                    break;
                    case 3:
                     k3 = 0.80;
                    break;
                }
            break;
            case 6:
             switch(sp){
                 case 1:
                     k3 = 0.57;
                    break;
                    case 2:
                     k3 = 0.73;
                    break;
                    case 3:
                     k3 = 0.79;
                    break;
                }
            break;
            case 7:
             switch(sp){
                 case 1:
                     k3 = 0.54;
                    break;
                    case 2:
                     k3 = 0.73;
                    break;
                    case 3:
                     k3 = 0.79;
                    break;
                }
            break;
            case 8:
             switch(sp){
                 case 1:
                     k3 = 0.52;
                    break;
                    case 2:
                     k3 = 0.72;
                    break;
                    case 3:
                     k3 = 0.78;
                    break;
                }
            break;
            case 9:
             switch(sp){
                 case 1:
                     k3 = 0.50;
                    break;
                    case 2:
                     k3 = 0.72;
                    break;
                    case 3:
                     k3 = 0.78;
                    break;

                }
            break;
            case 12:
             switch(sp){
                 case 1:
                     k3 = 0.45;
                    break;
                }
            break;
            case 16:
             switch(sp){
                 case 1:
                     k3 = 0.41;
                    break;
                }
            break;
            case 20:
             switch(sp){
                 case 1:
                     k3 = 0.38;
                    break;
                }
            break;
        }  
        }
      k=k1*k3;
    }
    else if (x==6 ){
     c.style.display = "none";
        d.style.display = "none";       
        un.style.display = "none";
        res.style.display = "none";
        nat.style.display = "none";
        txtres.style.display = "none";
        txtlay.style.display = "block";
        nlay.style.display = "block";
        txtund.style.display = "none";
        txtgr.style.display = "block";
        ngr.style.display = "block";
        nas.style.display = "none";
        grp.style.display = "block";
        document.getElementById("amtemp").innerHTML = "Ambient temperature:";
       
        var gr = parseFloat(form.gr.value);
        var sp; 
       k1 = tempf(form);
        if (nuc == 1){
            efi.style.display = "none"; 
            et.style.display = "none";
            ef.style.display = "block";
            sp = parseFloat(form.gr.value);
            var eff = parseFloat(form.eftype.value);
            var nmgr = parseFloat(form.ngr.value);
            var nml = parseFloat(form.nlay.value);
            switch (eff){
             case 1:
                 switch (gr){
                     case 1:
                         k3=1;
                        break;
                        case 2:
                         k3=0.8;
                        break;
                        case 3:
                         k3=0.7;
                        break;
                        case 4:
                         k3=0.65;
                        break;
                        case 5:
                         k3=0.6;
                        break;
                        case 6:
                         k3=0.57;
                        break;
                        case 7:
                         k3=0.54;
                        break;
                        case 8:
                         k3=0.52;
                        break;
                        case 9:
                         k3=0.5;
                        break;
                        case 12:
                         k3=0.45;
                        break;
                        case 16:
                         k3=0.41;
                        break;
                        case 20:
                         k3=0.38;
                        break;
                    }
                break;
                case 2:
                 switch (nml){
                     case 1:
                         switch(nmgr){
                             case 1:
                                 k3=0.96;
                                break;
                                case 2:
                                 k3=0.86;
                                break;
                                case 3:
                                 k3=0.84;
                                break;
                            }
                        break;
                        case 2:
                         switch(nmgr){
                             case 1:
                                 k3=0.95;
                                break;
                                case 2:
                                 k3=0.84;
                                break;
                                case 3:
                                 k3=0.86;
                                break;
                            }
                        break;
                        case 3:
                         switch(nmgr){
                             case 1:
                                 k3=0.95;
                                break;
                                case 2:
                                 k3=0.84;
                                break;
                                case 3:
                                 k3=0.84;
                                break;
                            }
                        break;
                    }
                break;
             case 3:
                 switch (nml){
                     case 1:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=0.97;
                                break;
                                case 3:
                                 k3=0.96;
                                break;
                            }
                        break;
                        case 2:
                         switch(nmgr){
                             case 1:
                                 k3=0.98;
                                break;
                                case 2:
                                 k3=0.93;
                                break;
                                case 3:
                                 k3=0.89;
                                break;
                            }
                        break;
                        case 3:
                         switch(nmgr){
                             case 1:
                                 k3=0.97;
                                break;
                                case 2:
                                 k3=0.90;
                                break;
                                case 3:
                                 k3=0.86;
                                break;
                            }
                        break;
                    }
                break;
                case 4:
                 switch (nml){
                     case 1:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=0.98;
                                break;
                                case 3:
                                 k3=0.96;
                                break;
                            }
                        break;
                        case 2:
                         switch(nmgr){
                             case 1:
                                 k3=0.97;
                                break;
                                case 2:
                                 k3=0.93;
                                break;
                                case 3:
                                 k3=0.89;
                                break;
                            }
                        break;
                        case 3:
                         switch(nmgr){
                             case 1:
                                 k3=0.97;
                                break;
                                case 2:
                                 k3=0.90;
                                break;
                                case 3:
                                 k3=0.86;
                                break;
                            }
                        break;
                    }
                break;
                case 5:
                 switch (nml){
                     case 1:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=0.91;
                                break;
                                case 3:
                                 k3=0.89;
                                break;
                            }
                        break;
                        case 2:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=0.90;
                                break;
                                case 3:
                                 k3=0.86;
                                break;
                            }
                        break;
                        case 3:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=0.90;
                                break;
                                case 3:
                                 k3=0.86;
                                break;
                            }
                        break;
                    }
                break;
                case 6:
                 switch (nml){
                     case 1:
                         switch(nmgr){
                             case 1:
                                 k3=1;
                                break;
                                case 2:
                                 k3=1;
                                break;
                                case 3:
                                 k3=1;
                                break;
                            }
                        break;
                        case 2:
                         switch(nmgr){
                             case 1:
                                 k3=0.97;
                                break;
                                case 2:
                                 k3=0.95;
                                break;
                                case 3:
                                 k3=0.93;
                                break;
                            }
                        break;
                        case 3:
                         switch(nmgr){
                             case 1:
                                 k3=0.96;
                                break;
                                case 2:
                                 k3=0.94;
                                break;
                                case 3:
                                 k3=0.90;
                                break;
                            }
                        break;
                    }
                break;
            }
        }
        else if (nuc == 2){
        ef.style.display = "none";
        et.style.display = "none";            
        efi.style.display = "block";
        efi.innerHTML = "Method F & G is for single-core cables only";  
        }
       k=k1*k3;
    }
if (x==7){
     c.style.display = "none";
        d.style.display = "none";
        ef.style.display = "none";
        et.style.display = "none";
        un.style.display = "none";
        res.style.display = "none";
        nat.style.display = "none";
        txtres.style.display = "none";
        txtlay.style.display = "none";
        nlay.style.display = "none";
        txtund.style.display = "none";
        txtgr.style.display = "none";
        ngr.style.display = "none";
        efi.style.display = "none";
        nas.style.display = "none";
        grp.style.display = "none";
        document.getElementById("amtemp").innerHTML = "Ambient temperature:";     
        switch (nuc){
         case 1:
             k = tempf(form);
            break;
            case 2:
             k = "Method F & G is for single-core cables only";
            break;
        } 
    }
document.getElementById("txtft").innerHTML = "Total correction factor: " + k;
document.getElementById("txtcr").innerHTML = "The current-carrying capacity of the considered cable: " + Math.round(fload/k) + " (A)";   
}

function tempf(form) {
    var tem = parseFloat(form.temp.value);
    var ins = parseFloat(form.intype.value);
    var hs;
switch (tem) {
  case 10:
    if (ins==1){
     hs=1.22;
    }
    else if (ins==2){
     hs=1.15;
    }
    break;
  case 15:
    if (ins==1){
     hs=1.17;
    }
    else if (ins==2){
     hs=1.12;
    }
    break;
  case 20:
    if (ins==1){
     hs=1.12;
    }
    else if (ins==2){
     hs=1.08;
    }
    break;
  case 25:
    if (ins==1){
     hs=1.06;
    }
    else if (ins==2){
     hs=1.04;
    }
    break;
  case 30:
    if (ins==1){
     hs=1;
    }
    else if (ins==2){
     hs=1;
    }
    break;
  case 35:
    if (ins==1){
     hs=0.94;
    }
    else if (ins==2){
     hs=0.96;
    }
    break;
  case 40:
    if (ins==1){
     hs=0.87;
    }
    else if (ins==2){
     hs=0.91;
    }
    break;
  case 45:
    if (ins==1){
     hs=0.79;
    }
    else if (ins==2){
     hs=0.87;
    }
    break;
  case 50:
    if (ins==1){
     hs=0.71;
    }
    else if (ins==2){
     hs=0.82;
    }
    break;
  case 55:
    if (ins==1){
     hs=0.61;
    }
    else if (ins==2){
     hs=0.76;
    }
    break;
  case 60:
    if (ins==1){
     hs=0.50;
    }
    else if (ins==2){
     hs=0.71;
    }
    break;
 case 65:
    if (ins==2){
     hs=0.65;
    }
    break;
 case 70:
    if (ins==2){
     hs=0.58;
    }
    break;
 case 75:
    if (ins==2){
     hs=0.50;
    }
    break;
 case 80:
    if (ins==2){
     hs=0.41;
    }
    break;
}

   return hs;
}
function tempd(form) {
    var tem = parseFloat(form.temp.value);
    var ins = parseFloat(form.intype.value);
    var hs;
switch (tem) {
  case 10:
    if (ins==1){
     hs=1.1;
    }
    else if (ins==2){
     hs=1.07;
    }
    break;
  case 15:
    if (ins==1){
     hs=1.105;
    }
    else if (ins==2){
     hs=1.104;
    }
    break;
  case 20:
    if (ins==1){
     hs=1;
    }
    else if (ins==2){
     hs=1;
    }
    break;
  case 25:
    if (ins==1){
     hs=0.95;
    }
    else if (ins==2){
     hs=0.96;
    }
    break;
  case 30:
    if (ins==1){
     hs=0.89;
    }
    else if (ins==2){
     hs=0.93;
    }
    break;
  case 35:
    if (ins==1){
     hs=0.84;
    }
    else if (ins==2){
     hs=0.89;
    }
    break;
  case 40:
    if (ins==1){
     hs=0.77;
    }
    else if (ins==2){
     hs=0.85;
    }
    break;
  case 45:
    if (ins==1){
     hs=0.71;
    }
    else if (ins==2){
     hs=0.80;
    }
    break;
  case 50:
    if (ins==1){
     hs=0.63;
    }
    else if (ins==2){
     hs=0.76;
    }
    break;
  case 55:
    if (ins==1){
     hs=0.55;
    }
    else if (ins==2){
     hs=0.71;
    }
    break;
  case 60:
    if (ins==1){
     hs=0.45;
    }
    else if (ins==2){
     hs=0.65;
    }
    break;
 case 65:
    if (ins==2){
     hs=0.60;
    }
    break;
 case 70:
    if (ins==2){
     hs=0.53;
    }
    break;
 case 75:
    if (ins==2){
     hs=0.46;
    }
    break;
 case 80:
    if (ins==2){
     hs=0.38;
    }
    break;
}

   return hs;
}
</script>