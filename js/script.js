$(function() {
// declaration area
  var testResultsCount = $(".downloadLinkForTestResults").length;
  var diagramFilesCount = $(".uploadedDiagramsDiv").length;
  var testResultsNames = [];
  var count = $(".custom-name").length;
  var counts = [];
  var diagramFiles = [];
  counts["clientpluginsRemoveCount"] = $(".clientpluginsName").length;
  counts["webserversRemoveCount"] = $(".webserverpluginsName").length;
  counts["ssoHeaderVariablesRemoveCount"] = $(".headerAttrName").length;
  counts["policyURIPatternsRemoveCount"] = $(".protectedUrlUsers").length;
  counts["protectedURIPatternsRemoveCount"] = $(".unProtectedUrls").length;
  counts["appServersRemoveCount"] = $(".appservertype").length;
  counts["portRemoveProdCount"] = $(".prodFields").find(".ipaddress").length;
  counts["portRemoveNonProdCount"] = [];
  $(".nonProdFields").each(function(ind, el) {
      counts["portRemoveNonProdCount"][ind] = $(this).find(".ipaddress").length;
  });

  var validation = false;
// declaration area ends

// initialize area 
  $("#tabs" ).tabs();
  $(".accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
 
  $('[data-toggle="tooltip"]').tooltip();
  $(".ssoKpWorkForce").multiselect({header: true});
 

  $("select.flexselect").flexselect({
    allowMismatch: true,
    inputNameTransform:  function(name) { return "wsso_" + name; }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  });
  $("#agreeCheckbox").on("click", function() {
    $("#formSubmit").attr("disabled", !this.checked);
  });
  $(".btnNext").click(function () {
      $( "#tabs" ).tabs( "option", "active", $("#tabs").tabs('option', 'active')+1 );
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $(".btnPrev").click(function () {
      $( "#tabs" ).tabs( "option", "active", $("#tabs").tabs('option', 'active')-1 );
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });
// initialize area ends

// webserver version dropdowns dynamic data code
  // on click
  $(document).on('click', '#webserverversion', function(event) {
    if($(this).attr('action') != 'false') {
      $.blockUI({ 
          message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
          timeout: 5000 
      });
      $.ajax({
          url: "/IAMPortal/getWebServerDetails",
          type: "POST",
          data: JSON.stringify([]),
          contentType: "application/json",
          success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {   
                $("#webserverversion").html('<option value="">Choose Web server version </option>');
                $(data.records).each(function (i) { 
                  $("#webserverversion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $.unblockUI();
              }
            }
           },
          error: function(e) {
            console.log("webserverversion click failed");
          }
      });
      $(this).attr('action', 'false');
      this.blur();
      window.focus();
      return false;
    }
  });
  $(document).on('click', '#webServerBitMode', function(event) {
    if($(this).attr('action') != 'false') {
      $.blockUI({ 
          message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
          timeout: 5000 
      });
      var webserverversionValue = $("#webserverversion").val();
      $.ajax({
          url: "/IAMPortal/getWebServerDetails",
          type: "POST",
          data: JSON.stringify([webserverversionValue]),
          contentType: "application/json",
          success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {   
                $("#webServerBitMode").html('<option value="">Choose Web Server Bit Mode </option>');
                $(data.records).each(function (i) { 
                  $("#webserverversion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $.unblockUI();
              }
            }
           },
          error: function(e) {
            console.log("webServerBitMode click failed");
          }
      });
      $(this).attr('action', 'false');
      this.blur();
      window.focus();
      return false;
    }
  });
  $(document).on('click', '#osVersion', function(event) {
    if($(this).attr('action') != 'false') {
      $.blockUI({ 
          message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
          timeout: 5000 
      });
      var webserverversionValue = $("#webserverversion").val();
      var webServerBitModeValue = $("#webServerBitMode").val();
      $.ajax({
          url: "/IAMPortal/getWebServerDetails",
          type: "POST",
          data: JSON.stringify([webserverversionValue,webServerBitModeValue]),
          contentType: "application/json",
          success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {   
                $("#webServerBitMode").html('<option value="">Choose OS version </option>');
                $(data.records).each(function (i) { 
                  $("#webserverversion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $.unblockUI();
              }
            }
           },
          error: function(e) {
            console.log("osVersion click failed");
          }
      });
      $(this).attr('action', 'false');
      this.blur();
      window.focus();
      return false;
    }
  });
  $(document).on('click', '#osBitMode', function(event) {
    if($(this).attr('action') != 'false') {
      $.blockUI({ 
          message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
          timeout: 5000 
      });
      var webserverversionValue = $("#webserverversion").val();
      var webServerBitModeValue = $("#webServerBitMode").val();
      var osVersionValue = $("#osVersion").val();
      $.ajax({
          url: "/IAMPortal/getWebServerDetails",
          type: "POST",
          data: JSON.stringify([webserverversionValue,webServerBitModeValue,osVersionValue]),
          contentType: "application/json",
          success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {   
                $("#webServerBitMode").html('<option value="">Choose OS bit mode </option>');
                $(data.records).each(function (i) { 
                  $("#webserverversion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $.unblockUI();
              }
            }
           },
          error: function(e) {
            console.log("osBitMode click failed");
          }
      });
      $(this).attr('action', 'false');
      this.blur();
      window.focus();
      return false;
    }
  });
  $(document).on('click', '#processorType', function(event) {
    if($(this).attr('action') != 'false') {
      $.blockUI({ 
          message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
          timeout: 5000 
      });
      var webserverversionValue = $("#webserverversion").val();
      var webServerBitModeValue = $("#webServerBitMode").val();
      var osVersionValue = $("#osVersion").val();
      var osBitModeValue = $("#osBitMode").val();
      $.ajax({
          url: "/IAMPortal/getWebServerDetails",
          type: "POST",
          data: JSON.stringify([webserverversionValue,webServerBitModeValue,osVersionValue,osBitModeValue]),
          contentType: "application/json",
          success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {   
                $("#webServerBitMode").html('<option value="">Choose processor type </option>');
                $(data.records).each(function (i) { 
                  $("#webserverversion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $.unblockUI();
              }
            }
           },
          error: function(e) {
            console.log("processorType click failed");
          }
      });
      $(this).attr('action', 'false');
      this.blur();
      window.focus();
      return false;
    }
  });
  // on change
  $(document).on('change', '#webserverversion', function(event) {
    $.blockUI({ 
        message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
        timeout: 5000 
    });
    $("#webServerBitMode,#osVersion,#osBitMode,#processorType").hide().removeClass('required'); 
    var thisValue = $(this).val();
    if(thisValue) {
      $.ajax({
        url: "/IAMPortal/getWebServerDetails",
        type: "POST",
        data: JSON.stringify([thisValue]),
        contentType: "application/json",
        success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {
                $("#webServerBitMode").addClass("required").show().html("<option value=''>Choose Web server bit mode </option>");
                $(data.records).each(function (i) { 
                  $("#webServerBitMode").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $("#webServerBitMode,#osVersion,#osBitMode,#processorType").attr('action', 'false');
                $.unblockUI();
              }
            }
         },
        error: function(e) {
          console.log("webserverversion failed");
        }
     });
    }
  });
  $(document).on('change', '#webServerBitMode', function(event) {
    $.blockUI({ 
        message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
        timeout: 5000 
    });
    $("#osVersion,#osBitMode,#processorType").hide().removeClass('required'); 
    var thisValue = $(this).val();
    var webserverversionValue = $("#webserverversion").val();
    if(thisValue) {
      $.ajax({
        url: "/IAMPortal/getWebServerDetails",
        type: "POST",
        data: JSON.stringify([webserverversionValue,thisValue]),
        contentType: "application/json",
        success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {
                $("#osVersion").addClass("required").show().html("<option value=''>Choose OS version </option>");
                $(data.records).each(function (i) { 
                  $("#osVersion").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $("#osVersion,#osBitMode,#processorType").attr('action', 'false');
                $.unblockUI();
              }
            }
         },
        error: function(e) {
          console.log("webServerBitMode failed");
        }
     });
    }
  });
  $(document).on('change', '#osVersion', function(event) {
    $.blockUI({ 
        message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
        timeout: 5000 
    });
    $("#osBitMode,#processorType").hide().removeClass('required'); 
    var thisValue = $(this).val();
    var webserverversionValue = $("#webserverversion").val();
    var webServerBitModeValue = $("#webServerBitMode").val();
    if(thisValue) {
      $.ajax({
        url: "/IAMPortal/getWebServerDetails",
        type: "POST",
        data: JSON.stringify([webserverversionValue,webServerBitModeValue,thisValue]),
        contentType: "application/json",
        success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {
                $("#osBitMode").addClass("required").show().html("<option value=''>Choose OS bit mode </option>");
                $(data.records).each(function (i) { 
                  $("#osBitMode").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $("#osBitMode,#processorType").attr('action', 'false');
                $.unblockUI();
              }
            }
         },
        error: function(e) {
          console.log("osVersion failed");
        }
     });
    }
  });
  $(document).on('change', '#osBitMode', function(event) {
    $.blockUI({ 
        message: "<b><img src='"+domainPath+"app/img/loader.gif' /> Please wait, data is loading!</b>", 
        timeout: 5000 
    });
    $("#processorType").hide().removeClass('required'); 
    var thisValue = $(this).val();
    var webserverversionValue = $("#webserverversion").val();
    var webServerBitModeValue = $("#webServerBitMode").val();
    var osVersionValue = $("#osVersion").val();
    if(thisValue) {
      $.ajax({
        url: "/IAMPortal/getWebServerDetails",
        type: "POST",
        data: JSON.stringify([webserverversionValue,webServerBitModeValue,osVersionValue,thisValue]),
        contentType: "application/json",
        success: function(data) {
            if(data.success == true) {
              if(data.records.length > 0) {
                $("#processorType").addClass("required").show().html("<option value=''>Choose processor type </option>");
                $(data.records).each(function (i) { 
                  $("#processorType").append("<option value=\""+data.records[i]+"\">"+data.records[i]+"</option>");
                });
                $("#processorType").attr('action', 'false');
                $.unblockUI();
              }
            }
         },
        error: function(e) {
          console.log("osBitMode failed");
        }
     });
    }
  });
// webserver version dropdowns dynamic data code ends

// file upload code for diagram env 
  $(document).on('click', '#diagramfileUpload', function(event) {
    var files = document.getElementById('diagramfile').files;
    var filesCount = files.length+diagramFilesCount;
    if(files.length == 0){
      $.blockUI({ 
        message: "<b>Please select files!</b>", 
        timeout: 2000 
      });
    }else if(files.length > 5){
      $.blockUI({ 
        message: "<b>You can upload maximum 5 files at a time!</b>", 
        timeout: 2000 
      });
      $('#diagramfile').val('');
    }else if(filesCount > 10){
      $.blockUI({ 
        message: "<b>Total files should not exceed 10 !</b>", 
        timeout: 2000 
      });
      $('#diagramfile').val('');
    }else {
      var tempFiles = [];
      var failedFiles = [];
      var file = new FormData();
      var fileInfo = document.getElementById('diagramfile').files;
      for(var i=0; i<fileInfo.length;i++) {
        var parts = fileInfo[i].name.split('.');
        var ext = parts[parts.length-1];
          
        if(ext.toLowerCase() != 'doc' && ext.toLowerCase() != 'docx' && ext.toLowerCase() != 'pdf' && ext.toLowerCase() != 'ppt'&& ext.toLowerCase() != 'pptx' && ext.toLowerCase() != 'vsd' && ext.toLowerCase() != 'vsdx' && ext.toLowerCase() != 'html') {            
            $.blockUI({ 
              message: "<b>Please upload only .doc,.pdf,.docx,.pptx,.ppt,.vsd,.vsdx files!</b>", 
              timeout: 3000 
            });
            $('#diagramfile').val('');
            return false;
        }
        if(fileInfo[i].size > 5*1024*1024) {
            $.blockUI({ 
              message: "<b>Maximum file limit is 5MB, "+fileInfo[i].name+" exceeded it !</b>", 
              timeout: 3000 
            });
            $('#diagramfile').val('');
            return false;
        }
      
        file.append('file_'+i,fileInfo[i]);  
        file.append('type','diagram');  
        tempFiles[i] = fileInfo[i].name;
      }
      $.blockUI({ 
        message: "<b>Please wait!</b>", 
        timeout: 2000 
      });
      $.ajax({
        url: "/IAMPortal/wssoFileUpload",
        type: "POST",
        data: file,
        dataType: 'text',
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        success: function(response) {
          response = jQuery.parseJSON(response);
          if(response.success == true) {
            $(response.records).each(function (k,v) { 
              if(v) {
                var uploadedDiagrams = '<div class="row uploadedDiagramsDiv"><div class="col-md-6 downloadLinkForDiagrams"><a href="'+domainPath+"download?fileName="+v+"&intgId="+intgId+"&type=diagram"+'" class="" target="_BLANK">'+tempFiles[k] +'</a></div><div class="col-md-3"><button type="button" class="btn btn-danger btn-xs deleteUploadedDiagram" filename="'+v+'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button></div></div>';
                $(".uploadedDiagrams").append(uploadedDiagrams);      
                $('#diagramfile').val('');
                diagramFiles.push(v);
                diagramFilesCount++;
                // diagramFiles.shift(0);
              }else {
                  console.log('upload failed - '+tempFiles[k]);
                  $.blockUI({ 
                    message: tempFiles[k]+" File upload failed, please try again !", 
                    timeout: 2000 
                  });
              }
            });
            $.unblockUI();
          }
        },
        error: function(e) {
          $.blockUI({ 
            message: "<b>File upload failed, please try again !</b>", 
            timeout: 2000 
          });
        }
      });
    }
  });
  $(document).on('click', '.deleteUploadedDiagram', function(event) {
    $(this).closest('.uploadedDiagramsDiv').fadeOut('slow').remove();
    diagramFilesCount--;
    diagramFiles.splice(diagramFiles.indexOf($(this).attr('filename')),1);
  });
// file upload code ends

// datepicker actions
  $(".date-picker-prd" ).datepicker({ minDate: 2, maxDate: "" });
  $(".date-picker").datepicker({ minDate: 1, maxDate: "" ,
    onSelect: function(dateStr) {
      var min = $(this).datepicker('getDate') || new Date(); 
      var max = new Date(min.getTime());
      max.setMonth(max.getMonth() + 1);  
      $(".date-picker-prd").val('');
      $(".date-picker-prd").datepicker("destroy");
      $(".date-picker-prd").datepicker({minDate: min, maxDate: max});
      $(".custom-date").each(function(ind, el) {
          $(this).val('');
          $(this).datepicker("destroy");
          $(this).datepicker({minDate: min, maxDate: max});
      });
    }
  }); 
  $(document).on('change', '.custom-date', function(event) {
    var elemNumber = parseInt($(this).attr("count"));
    elemNumberInc = elemNumber+1;

    var minD = $("#customtime"+(parseInt(count)-1)).datepicker('getDate') || new Date(); 
    var maxD = new Date(minD.getTime());
    maxD.setMonth(maxD.getMonth() + 1);

    $(".custom-date").each(function(ind, el) {
      if(parseInt($(this).attr("count")) > elemNumber) {
        $("#customtime"+elemNumberInc).val('');
        $("#customtime"+elemNumberInc).datepicker("destroy");
        $("#customtime"+elemNumberInc).datepicker({minDate: minD, maxDate: maxD});
        elemNumberInc++;
      }
    });

    minD = $("#customtime"+(parseInt(count)-1)).datepicker('getDate') || new Date(); 
    maxD = new Date(minD.getTime());
    maxD.setMonth(maxD.getMonth() + 1);

    $(".date-picker-prd").val('');
    $(".date-picker-prd").datepicker("destroy");
    $(".date-picker-prd").datepicker({minDate: minD, maxDate: maxD});
  });
// datepicker actions ends

// Add More Button actions
  $(document).on("click", '#custom-add', function() {
    if(count<10)
    {
      count++;
      var customFieldset = '<h1 class="nonProdFieldsHeading'+count+'">Non-Prod Environment '+count+'</h1><div  class="nonProdFields"><div class="row"><div class="col-md-4"><input type="text" class="form-control custom-name input-sm required" id="customname'+count+'" name="customname'+count+'"  placeholder="Name"></div><div class="col-md-5 input-group form-group"><input type="text" class="form-control date-picker custom-date input-sm required" count="'+count+'" id="customtime'+count+'"  name="customtime'+count+'" placeholder="Project Timeline"  readonly><label for="customtime'+count+'" class="input-group-addon btn input-sm"><span class="glyphicon glyphicon-calendar"></span></label></div><div class="col-md-2 remove-section"><button type="button" class="btn btn-danger btn-xs custom-remove"><span class="glyphicon glyphicon-minus " aria-hidden="true"></span> Remove</button></div></div><div class="row"><div class="col-md-6"><p>What is the URL end users use to access the environment?</p><input type="text" class="form-control input-sm endUserUrl required" id="endUserUrl'+count+'" name="endUserUrl'+count+'"  placeholder=""></div><div class="col-md-6"><p>What is the application back-end url for this Env?</p><input type="text" class="form-control input-sm appBackendUrl" id="appBackendUrl required'+count+'" name="appBackendUrl'+count+'"  placeholder=""></div></div><div class="row"><div class="col-md-6  inside-content"><p>Is there a WSSO policy prefix for this environment?</p><div class="env-options"><div class="radio"><label class="radio-inline"><input type="radio" name="wssoPolicyPrefix'+count+'" class="wssoPolicyPrefix wssoPolicyPrefixShow" id="wssoPolicyPrefixYes'+count+'" value="Yes">Yes</label><label class="radio-inline"><input type="radio" name="wssoPolicyPrefix'+count+'" class="wssoPolicyPrefix wssoPolicyPrefixHide" id="wssoPolicyPrefixNo'+count+'" value="">No</label></div><div class="form-group wssoPolicyPrefix-explain content-hide"><input type="text" class="form-control input-sm wssoPolicyPrefixText required" id="" name=""  placeholder=""></div></div></div><div class="col-md-6 inside-content"><p>Will this application use load balancer? (Please provide the health check URL).</p><div class="env-options"><div class="radio"><label class="radio-inline"><input type="radio" name="wssoLoadBalancer'+count+'" class="wssoLoadBalancer wssoLoadBalancerShow" id="wssoLoadBalancerYes'+count+'" value="Yes">Yes</label><label class="radio-inline"><input type="radio" name="wssoLoadBalancer'+count+'" class="wssoLoadBalancer wssoLoadBalancerHide" id="wssoLoadBalancerNo'+count+'" value="">No</label></div><div class="form-group wssoLoadBalancer-explain content-hide"><input type="text" class="form-control input-sm wssoLoadBalancerText required" id="" name=""  placeholder=""></div></div></div></div><div class="row "><div class="col-md-9"><p>Please provide your IP address, hostnames, FQDN, and ports:</p></div></div><div class="portSection"><div class="row"><div class="col-md-3"><input type="text" class="form-control input-sm required ipaddress" id="" name=""  placeholder="IP Address"></div><div class="col-md-3"><input type="text" class="form-control input-sm required hostname" id="" name=""  placeholder="Hostnames"></div><div class="col-md-1"><input type="text" class="form-control input-sm required fqdn" id="" name=""  placeholder="FQDN"></div><div class="col-md-3"><input type="text" class="form-control input-sm required ports" id="" name=""  placeholder="Comma separated ports"></div><div class="col-md-2"><button type="button" class="btn btn-success btn-xs forNonProd portAdd" count="'+count+'"><span class="glyphicon glyphicon-plus " aria-hidden="true"></span> Add</button></div></div></div></div> ';
      $(".nonProdArea").append(customFieldset);
      $('.accordion').accordion("refresh");        
      var minD = $("#customtime"+(parseInt(count)-1)).datepicker('getDate') || new Date(); 
      var maxD = new Date(minD.getTime());
      maxD.setMonth(maxD.getMonth() + 1);  

      $("#customtime"+count).datepicker({ 
        minDate: minD,  
        onSelect: function(dateStr2) {
          var min = $(this).datepicker('getDate') || $("#customtime"+(parseInt(count)-1)).datepicker('getDate');
          var max = new Date(min.getTime());
          max.setMonth(max.getMonth() + 1);  

          $(".date-picker-prd").val('');
          $(".date-picker-prd").datepicker("destroy");
          $(".date-picker-prd").datepicker({minDate: min, maxDate: max});

          var elemNumber = parseInt($(this).attr("count"));
          elemNumberInc = elemNumber+1;
          $(".custom-date").each(function(ind, el) {
            if(parseInt($(this).attr("count")) > elemNumber) {
              console.log(elemNumber+"-"+parseInt($(this).attr("count")));
              $("#customtime"+elemNumberInc).val('');
              $("#customtime"+elemNumberInc).datepicker("destroy");
              $("#customtime"+elemNumberInc).datepicker({minDate: min, maxDate: max});
              elemNumberInc++;
            }
          });
        }
      });

      $(".rows-count").html(count+" added");
    }else {
       $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#clientpluginsAddMore', function() {
    if(counts["clientpluginsRemoveCount"] < 10) {
      var clientpluginscontent = '<div class="row"><div class="col-md-3"><input type="text" class="form-control input-sm clientpluginsName required" id="" name="" placeholder="e.g. Flash, Active-X, etc." maxlength="50"></div><div class="col-md-3 input-group form-group"><input type="text" class="form-control input-sm clientpluginsPurpose required" id="" name="" placeholder="e.g. viewing documents" maxlength="100"></div><div class="col-md-2"><button type="button" class="btn btn-danger btn-xs clientpluginsRemove" id=""><span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove</button></div></div>';
      $(".clientpluginssection").append(clientpluginscontent);
      counts["clientpluginsRemoveCount"]++;
      console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#webserversAddMore', function() {
    if(counts["webserversRemoveCount"] < 10) {
      var webserverpluginscontent = '<div class="row"><div class="col-md-3"><input type="text" class="form-control input-sm webserverpluginsName required" id="" name="" placeholder="e.g. websphere, weblogic, etc" maxlength="50"></div><div class="col-md-3 input-group form-group"><input type="text" class="form-control input-sm webserverpluginsPurpose required" id="" name="" placeholder="e.g. uploading documents" maxlength="100"></div><div class="col-md-2"><button type="button" class="btn btn-danger btn-xs webserversRemove" id=""><span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove</button></div></div>';
      $(".webserverpluginssection").append(webserverpluginscontent);
      counts["webserversRemoveCount"]++;
      console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#appServersAdd' ,function() {
    if(counts["appServersRemoveCount"] < 3) {
      var appServersContent = '<div class="row"><div class="col-md-2"><input type="text" class="form-control input-sm required appservertype" id="" name="" placeholder="Application Server Type"></div><div class="col-md-2"><input type="text" class="form-control input-sm required appserverversion" id="" name="" placeholder="Application Server Version"></div> <div class="col-md-2"><input type="text" class="form-control input-sm required appserverbittype" id="" name="" placeholder="Application Server Bit Type"></div><div class="col-md-2"><input type="text" class="form-control input-sm required ostype" id="" name="" placeholder="OS Type/Version"></div><div class="col-md-1"><input type="text" class="form-control input-sm required osbit" id="" name="" placeholder="OS Bit"></div><div class="col-md-1"><input type="text" class="form-control input-sm required processor" id="" name="" placeholder="Proccessor"></div><div class="col-md-2 pull-right"><button type="button" class="btn btn-danger btn-xs appServersRemove"><span class="glyphicon glyphicon-minus " aria-hidden="true"></span> Remove</button></div></div>';
        $(this).parents(".appserverversionsection").append(appServersContent);
        counts["appServersRemoveCount"]++;
        console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 3.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#policyURIPatternsAddMore', function() {
    if(counts["policyURIPatternsRemoveCount"] < 10) {
      var policyURIPatternsContent = '<div class="row margin0"><div class="col-md-3 input-group form-group"><input type="text" class="form-control input-sm protectedUrlUsers required url" id="" name="" placeholder=""></div><div class="col-md-2 input-group form-group"><select name="" id="" class="ssoKpWorkForce" multiple="multiple"><option value="Active Employees">Active Employees</option><option value="Retired Employees">Retired Employees</option><option value="Non-Employees/Contractors">Non-Employees/Contractors</option><option value="External Vendors">External Vendors</option><option value="Providers">Providers</option></select></div><div class="col-md-2"><button type="button" class="btn btn-danger btn-xs policyURIPatternsRemove" id=""  style="padding:4px;"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove</button></div></div> ';
      $(".policyURIPatterns").find(".policyURIPatternsExplain").before(policyURIPatternsContent);
      $(".ssoKpWorkForce").multiselect({header: false});
      counts["policyURIPatternsRemoveCount"]++;
      console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#protectedURIPatternsAddMore', function() {
    if(counts["protectedURIPatternsRemoveCount"] < 10) {
      var protectedURIPatternsContent = '<div class="row"><div class="col-md-3 input-group"><input type="text" class="form-control input-sm unProtectedUrls required" id="" name="" placeholder=""></div><button type="button" class="btn btn-danger btn-xs protectedURIPatternsRemove" id="" style="padding:4px;"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove</button></div> ';
      $(".protectedURIPatterns").append(protectedURIPatternsContent);
      counts["protectedURIPatternsRemoveCount"]++;
      console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '#ssoHeaderVariablesAddMore', function() {
   if(counts["ssoHeaderVariablesRemoveCount"] < 10) {
    var ssoHeaderVariablesContent = '<div class="row"><div class="col-md-3"><input type="text" class="form-control input-sm headerAttrName required" id="" name="" placeholder="" maxlength="50"></div><div class="col-md-3 input-group form-group"><select id="headerEntrName'+counts["ssoHeaderVariablesRemoveCount"]+'" name="headerEntrName'+counts["ssoHeaderVariablesRemoveCount"]+'" class="flexselect"><option value="kpNUID">kpNUID</option><option value="kpFirstName">kpFirstName</option><option value="kpLastName">kpLastName</option><option value="kpLegalName">kpLegalName</option><option value="kpWorkEmail">kpWorkEmail</option><option value="kpWorkPhone">kpWorkPhone</option></select></div><div class="col-md-2"><button type="button" class="btn btn-danger btn-xs ssoHeaderVariablesRemove" id=""><span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove</button></div></div>';
    $(".ssoHeaderVariablesSection").find(".ssoHeaderVariablesExplain").before(ssoHeaderVariablesContent);
    $("select.flexselect").flexselect({
      allowMismatch: true,
      inputNameTransform:  function(name) { return "wsso_" + name; }
    });
    $("input[name='wsso_headerEntrName"+counts["ssoHeaderVariablesRemoveCount"]+"']").val('');
    counts["ssoHeaderVariablesRemoveCount"]++;
    console.log(counts);
    }else {
        $.blockUI({ 
            message: "<b>Sorry, you cannot add more than 10.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '.portAdd' ,function() {
    if($(this).hasClass('forNonProd')) {
      var portCount = $(this).attr('count');
      portCount = parseInt(portCount)-1;
      counts["portRemoveNonProdCount"][portCount] = $(this).closest(".nonProdFields").find(".ipaddress").length;
      if(counts["portRemoveNonProdCount"][portCount] < 10) {
        var portAddContent = '<div class="row"><div class="col-md-6"><input type="text" class="form-control input-sm required ipaddress" id="" name=""  placeholder="IP Address"></div><div class="col-md-6"><input type="text" class="form-control input-sm required hostname" id="" name=""  placeholder="Hostnames"></div></div><div class="row"><div class="col-md-6"><input type="text" class="form-control input-sm required fqdn" id="" name=""  placeholder="FQDN"></div><div class="col-md-5"><input type="text" class="form-control input-sm required ports" id="" name=""  placeholder="Comma separated ports"></div><div class="col-md-1"><button type="button" class="btn btn-danger btn-xs forNonProd portRemoveNonProd" count="'+portCount+'"><span class="glyphicon glyphicon-minus " aria-hidden="true"></span> Remove</button></div></div>';
          $(this).parents(".portSection").append(portAddContent);
          counts["portRemoveNonProdCount"][portCount]++;
          console.log(counts);
      }else {
          $.blockUI({ 
              message: "<b>Sorry, you cannot add more than 10.</b>", 
              timeout: 2000 
          });
      }
    }else {
      if(counts["portRemoveProdCount"] < 10) {
        var portAddContent = '<div class="row"><div class="col-md-6"><input type="text" class="form-control input-sm required ipaddress" id="" name=""  placeholder="IP Address"></div><div class="col-md-6"><input type="text" class="form-control input-sm required hostname" id="" name=""  placeholder="Hostnames"></div></div><div class="row"><div class="col-md-6"><input type="text" class="form-control input-sm required fqdn" id="" name=""  placeholder="FQDN"></div><div class="col-md-5"><input type="text" class="form-control input-sm required ports" id="" name=""  placeholder="Comma separated ports"></div><div class="col-md-1"><button type="button" class="btn btn-danger btn-xs portRemoveProd"><span class="glyphicon glyphicon-minus " aria-hidden="true"></span> Remove</button></div></div>';
          $(this).parents(".portSection").append(portAddContent);
          counts["portRemoveProdCount"]++;
          console.log(counts);
      }else {
          $.blockUI({ 
              message: "<b>Sorry, you cannot add more than 10.</b>", 
              timeout: 2000 
          });
      }
    }
  });
// Add More Button actions ends

// Remove Button actions 
  $(document).on("click", '.custom-remove' ,function(ee) {
    if(count > 1) {
      $(this).parents(".nonProdFields").fadeOut('slow').remove(); 
      $(".nonProdFieldsHeading"+count).remove(); 
      count--;
      $(".rows-count").html(count+" added");
      var minD = $("#customtime"+(parseInt(count))).datepicker('getDate') || new Date(); 
      var maxD = new Date(minD.getTime());
      maxD.setMonth(maxD.getMonth() + 1);

      $(".date-picker-prd").val('');
      $(".date-picker-prd").datepicker("destroy");
      $(".date-picker-prd" ).datepicker({ minDate:minD, maxDate: maxD });
    }else {
      $(".rows-count").html(count+" is mandatory");
        $.blockUI({ 
            message: "<b>Sorry, this cannot be removed.</b>", 
            timeout: 2000 
        });
    }
  });
  $(document).on("click", '.portRemoveNonProd, .portRemoveProd, .webserversRemove, .protectedURIPatternsRemove, .policyURIPatternsRemove, .ssoHeaderVariablesRemove, .customWebserverVersionRemove, .clientpluginsRemove, .appServersRemove' ,function() {
    $(this).parents(".row").fadeOut('slow').remove();
    var class_name = $(this).attr('class').split(' ');
    var class_name_length = class_name.length;
    class_name_length = class_name_length-1;
    class_name = class_name[class_name_length]+"Count";
    if($(this).hasClass('forNonProd')) {
      var portCount = $(this).attr('count');
      counts["portRemoveNonProdCount"][portCount]--;
      console.log(counts);
    }else {
      counts[class_name]--;
      console.log(counts);
    }
  });
// Remove Button actions ends

// code for radio button actions
  $(document).on("click", '#farmoptionsRadios2,#infrastructureOptionsRadios1,#ssoDefaultTimeOutRadiosRadios1,#ssoMaximumSessionTimeRadios2,#ssoSingleSignOutRadios2,#ssoInternetAccessRadios1,#infrastructureSSLOptionsRadios3,#ssoPolicyConfigureRadios1,#ssoHeaderVariables2,#subdomainradios1,#clientpluginradios1,#webserverradios1,#uniqueradios1,#ssoSamePoliciesRadios2,.wssoPolicyPrefixShow,.wssoLoadBalancerShow' ,
    function() {
    $(this).closest(".inside-content").find(".content-hide:first").show().children(".form-control").addClass('required').val('');
  });
  $(document).on("click", '#farmoptionsRadios1,#infrastructureOptionsRadios2,#ssoDefaultTimeOutRadiosRadios2,#ssoMaximumSessionTimeRadios1,#ssoSingleSignOutRadios1,#ssoInternetAccessRadios2,#infrastructureSSLOptionsRadios1,#infrastructureSSLOptionsRadios2,#ssoPolicyConfigureRadios2,#ssoHeaderVariables1,#subdomainradios2,#clientpluginradios2,#webserverradios2,#uniqueradios2,#ssoSamePoliciesRadios1,.wssoPolicyPrefixHide,.wssoLoadBalancerHide' ,
    function() {
      $(this).closest(".inside-content").find(".content-hide:first").hide().children(".form-control").removeClass('required');;
  });
// code for radio button actions ends

// code for on fly validations
  // $(".number-required").on("focusout change keyup paste click", function() {
  //   if($.trim($(this).val()) == '') {
  //     $(".userbaseerror-div").show();
  //     $(".userbaseerror").html("This should not be empty!");      
  //   }else if (isNaN($(this).val() / 1) == true) {
  //     $(".userbaseerror-div").show();
  //     $(".userbaseerror").html("This should contain a number.");
  //   }else {
  //     $(".userbaseerror-div").hide();
  //     validation = true;
  //   }
  // });
  $(document).on('focusout change keyup paste click', '.required', function(event) {
    if($.trim($(this).val()) == '') {
      $(this).css({
        "border": "1px solid red",
      });
      console.log('empty');
      $(this).siblings('.errorMessage').html("This field is mandatory").show();
    }else if($(this).hasClass('url')) {
      if(urlValidation($.trim($(this).val())) == false) {
        $(this).css({
          "border": "1px solid red",
        });
        $(this).siblings('.errorMessage').html("Not a valid URL").show();
      }else {
        $(this).css({
          "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    }else if($(this).hasClass('ipaddress')) {
      if(ipaddressValidation($.trim($(this).val())) == false) {
        $(this).css({
          "border": "1px solid red",
        });
        $(this).siblings('.errorMessage').html("Not a valid IP Address").show();
      }else {
        $(this).css({
          "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    }else if($(this).hasClass('hostname')) {
      if(hostnameValidation($.trim($(this).val())) == false) {
        $(this).css({
          "border": "1px solid red",
        });
        $(this).siblings('.errorMessage').html("Not a valid Hostname").show();
      }else {
        $(this).css({
          "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    }else if($(this).hasClass('fqdn')) {
      if(fqdnValidation($.trim($(this).val())) == false) {
        $(this).css({
          "border": "1px solid red",
        });
        $(this).siblings('.errorMessage').html("Not a valid FQDN").show();
      }else {
        $(this).css({
          "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    }else {
      $(this).css({
        "border": "",
      });
      $(this).siblings('.errorMessage').html("This field is mandatory").hide();
    }
  });
// code for on fly validations ends

// test cases file upload and delete code
  $(document).on('click', '.uploadTestResultsUpload', function(event) {
    var files = document.getElementById('uploadTestResultsFile').files;
    if(files.length == 0){
      $.blockUI({ 
        message: "<b>Please select files!</b>", 
        timeout: 2000 
      });
    }else {  
      if(testResultsCount && testResultsCount >9) {
        $('#uploadTestResultsFile').val('');
        $.blockUI({ 
          message: "<b>You cannot upload more than 10 files!</b>", 
          timeout: 3000 
        });
        return false;
      }      
      if(testResultsNames.indexOf(files[0].name) >= 0) {
          if (confirm("You have already chosen this file, still want to continue ?") == false) {
              $('#uploadTestResultsFile').val('');
              return false;
          }
      }
      var file = new FormData();
      var fileInfo = document.getElementById('uploadTestResultsFile').files;
      var parts = fileInfo[0].name.split('.');
      var ext = parts[parts.length-1];
        
      if(ext.toLowerCase() != 'doc' && ext.toLowerCase() != 'docx' && ext.toLowerCase() != 'pdf' && ext.toLowerCase() != 'ppt'&& ext.toLowerCase() != 'pptx' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'png') {            
          $.blockUI({ 
            message: "<b>Please upload only .jpg,.png,.doc,.pdf,.docx,.pptx,.ppt files!</b>", 
            timeout: 3000 
          });
          return false;
      }
      if(fileInfo[0].size > 5*1024*1024) {
          $.blockUI({ 
            message: "<b>Maximum file limit is 5MB, "+fileInfo[0].name+" exceeded it !</b>", 
            timeout: 3000 
          });
          return false;
      }
      testResultsNames.push(fileInfo[0].name);
      file.append('file',fileInfo[0]);  
      file.append('type','testresult');  
      var filepath = $('#uploadTestResultsFile').val();
      $.blockUI({ 
        message: "<b>Please wait!</b>", 
        timeout: 2000 
      });
      $.ajax({
        url: "/IAMPortal/wssoFileUpload",
        type: "POST",
        data: file,
        dataType: 'text',
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        success: function(response) {
          response = jQuery.parseJSON(response);
          if(response.success == true) {
            $(response.records).each(function (k,v) { 
              if(v) {
                var uploadedTestResults = '<div class="row uploadedTestResultsDiv"><div class="col-md-6 downloadLinkForTestResults"><a href="'+domainPath+"download?fileName="+v+"&intgId="+intgId+"&type=testresult"+'" class="" target="_BLANK">'+fileInfo[0].name +'</a></div><div class="col-md-3"><button type="button" class="btn btn-danger btn-xs deleteUploadedTestResult" filename="'+v+'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button></div></div>';
                $(".uploadedTestResultsFieldset").append(uploadedTestResults);      
                $('#uploadTestResultsFile').val('');
                testResultsCount++;
              }else {
                  console.log('upload failed - '+tempFiles[k]);
                  $.blockUI({ 
                    message: tempFiles[k]+" File upload failed, please try again !", 
                    timeout: 2000 
                  });
              }
            });
            $.unblockUI();
          }
        },
        error: function(e) {
          $.blockUI({ 
            message: "<b>File upload failed, please try again !</b>", 
            timeout: 2000 
          });
        }
      });
      console.log(testResultsNames);
    }
  });
  $(document).on('click', '.deleteUploadedTestResult', function(event) {
    $(this).closest('.uploadedTestResultsDiv').fadeOut('slow').remove();
    testResultsCount--;
    testResultsNames.splice(testResultsNames.indexOf($(this).attr('filename')),1);
    console.log(testResultsNames);
  });
// test cases file upload and delete code ends

// certificate file upload and delete code
  $(document).on('click', '.uploadZipFileAction', function(event) {
    var count = $(this).attr("count");
    var thisButton = $(this);
    var fileInfo = document.getElementById('uploadZipFile'+count).files;
    if(fileInfo.length == 0){
      $.blockUI({ 
        message: "<b>Please select files!</b>", 
        timeout: 2000 
      });
    }else {   
      var file = new FormData();
      var parts = fileInfo[0].name.split('.');
      var ext = parts[parts.length-1];
        
      if(ext.toLowerCase() != 'zip') {            
          $.blockUI({ 
            message: "<b>Please upload only .zip files!</b>", 
            timeout: 3000 
          });
          return false;
      }
      if(fileInfo[0].size > 10*1024*1024) {
          $.blockUI({ 
            message: "<b>Maximum file limit is 10MB, "+fileInfo[0].name+" exceeded it !</b>", 
            timeout: 3000 
          });
          return false;
      }
      file.append('file',fileInfo[0]);  
      file.append('type','certificate');  
      $.blockUI({ 
        message: "<b>Please wait!</b>", 
        timeout: 2000 
      });
      $.ajax({
        url: "/IAMPortal/wssoFileUpload",
        type: "POST",
        data: file,
        dataType: 'text',
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        success: function(response) {
          response = jQuery.parseJSON(response);
          if(response.success == true) {
            $(response.records).each(function (k,v) { 
              if(v) {
                var uploadedZipResult = '<div class="row uploadedZipDiv"><div class="col-md-6 downloadLinkZipResult"><a href="'+domainPath+"download?fileName="+v+"&intgId="+intgId+"&type=certificate"+'" class="btn btn-primary btn-sm" target="_BLANK"><span class="glyphicon glyphicon-save" aria-hidden="true"></span> Download '+fileInfo[0].name +'</a></div><div class="col-md-3"><button type="button" class="btn btn-danger btn-xs deleteUploadedZip" filename="'+v+'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button></div></div>';
                $(".uploadedZipFieldset"+count).show().append(uploadedZipResult);      
                $('#uploadZipFile'+count).val('');
                thisButton.parent().hide();
                // thisButton.parent().append(uploadedZipResult);      
              }else {
                console.log('upload failed - '+fileInfo[0].name);
                $.blockUI({ 
                  message: fileInfo[0].name+" File upload failed, please try again !", 
                  timeout: 2000 
                });
                $('#uploadZipFile'+count).val('');
              }
            });
            $.unblockUI();
          }
        },
        error: function(e) {
          $.blockUI({ 
            message: "<b>File upload failed, please try again !</b>", 
            timeout: 2000 
          });
        }
      });
    }
  });
  $(document).on('click', '.deleteUploadedZip', function(event) {
    $(this).closest(".uploadArea").find('.uploadButtonDiv').show();
    $(this).closest(".row").fadeOut('slow').remove();
  });
// certificate file upload and delete code ends

// function definitions  
  function fqdnValidation(hostname) {  
    if(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(hostname)) {  // working properly for url
      return true;
    } else {
      return false;
    }
  } 
  function hostnameValidation(hostname) {  
    if(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(hostname)) {  // working properly for url
      return true;
    } else {
      return false;
    }
  } 
  function ipaddressValidation(ipaddress) {  
   if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) { 
      return true;
    } else {
      return false;
    }
  }
  function urlValidation(url) {
    // var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var pattern = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
    // var pattern = "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$";
    if(pattern.test(url)) {
      return true;
    }else { 
      return false;
    }
  }
  function getFormModel() {
    var model = {};
    var formData = {};
    $("#mainform").serializeArray().map(function(x){formData[x.name] = x.value;});
    model.id = wssoId;
    model.intId = intgId;
    model.webBrowser = (formData.infrastructureOptionsRadios == 'Yes')?formData.infrastructureOptionsText:'';

    model.ssltlsRadio = (formData.ssltlsRadios == 'Yes')?'Y':'';
    
    model.sslOptionsTxt = (formData.infrastructureSSLOptionsRadios == 'option3')?formData.infrastructureSSLOptionsText:formData.infrastructureSSLOptionsRadios;
    model.otherAppsWssoProtected = (formData.subdomainradios == 'Yes')?formData.subdomainradiosText:'';  

    model.embeddedFrames = (formData.embeddedframesradios == 'Yes')?'Y':'';
    model.clientPlugins   = [];
    if(formData.clientpluginradios == "Yes") {
      var clientPluginList = [];
      $('.clientpluginsName').each(function() {
        clientPluginList.push({"key":$(this).val(),"value":$(this).parents('.row').find('.clientpluginsPurpose').val()});
      });
      model.clientPlugins   = clientPluginList;
    }
    model.webServerPlugins   = [];
    if(formData.webserverradios == "Yes") {
      var webServerPluginsList = [];
      $('.webserverpluginsName').each(function() {
        webServerPluginsList.push({"key":$(this).val(),"value":$(this).parents('.row').find('.webserverpluginsPurpose').val()});
      });
      model.webServerPlugins   = webServerPluginsList;
    }
    
    model.webServerVersionList = {};
    model.webServerVersionList.serverType ="";
    model.webServerVersionList.serverVersion = ($("#webserverversion").val())?$("#webserverversion").val():"";
    model.webServerVersionList.serverBitType = ($("#webServerBitMode").val())?$("#webServerBitMode").val():"";
    model.webServerVersionList.serverOSVersion = ($("#osVersion").val())?$("#osVersion").val():"";
    model.webServerVersionList.serverOSBitType = ($("#osBitMode").val())?$("#osBitMode").val():"";
    model.webServerVersionList.process = ($("#processorType").val())?$("#processorType").val():"";
    
    var appserverversionList = [];
    $(".appservertype").each(function() {
      var list = {};
      list.serverType = $(this).val();
      list.serverVersion = $(this).parents(".row").find(".appserverversion").val();
      list.serverBitType = $(this).parents(".row").find(".appserverbittype").val();
      list.serverOSVersion = $(this).parents(".row").find(".ostype").val();
      list.serverOSBitType = $(this).parents(".row").find(".osbit").val();
      list.process = $(this).parents(".row").find(".processor").val();
      appserverversionList.push(list);
    });
    model.appserverversionList  = appserverversionList;
    model.diagramFiles  = diagramFiles;
    model.webServerManager  = formData.appownerradios;
    model.additionalComments = (formData.uniqueradios == 'Yes')?formData.uniquerequirementExplain:'';


    // second tab data capture
    model.peakUserBase = parseInt(formData.peakUserBase);
    model.peakConcurrentUsers = parseInt(formData.concurrentUsers);
    model.testUsers = formData.testUsers;

    model.sessionTimeOut  = (formData.ssoDefaultTimeOutRadios == 'Yes')?formData.ssoDefaultTimeOutRadiosText:'';
    model.maxSessionTime  = (formData.ssoMaximumSessionTimeRadios == 'No')?formData.ssoMaximumSessionTimeRadiosText:'';

    model.singleSignOut  = (formData.ssoSingleSignOutRadios == 'No')?formData.ssoSingleSignOutRadiosText:'';
    model.oamIdentifier  = formData.ssoMnemonic;

    var protectedUrlUsersList = [];
    $('.protectedUrlUsers').each(function() {

      protectedUrlUsersList.push({"key":$(this).val(),"value":($(this).parents('.row').find('.ssoKpWorkForce').val())?$(this).parents('.row').find('.ssoKpWorkForce').val().toString():''});
    });
    model.protectedUrlUsers  = protectedUrlUsersList;
    model.urlUserRestrictions  = formData.policyURIPatternsText;
    
    var unProtectedUrlsList = [];
    $('.unProtectedUrls').each(function() {
      unProtectedUrlsList.push({"key":"unProtectedUrls","value":$(this).val()});
    }); 
    model.unProtectedUrls  = unProtectedUrlsList;


    var headerVariablesList = [];
    if(formData.ssoHeaderVariables == 'NonDefault') {
      $('.headerAttrName').each(function() {
        headerVariablesList.push({"key":$(this).val(),"value":$(this).parents('.row').find('.flexselect').val()});
      });
      model.headerVariables  = formData.headerVariablesExplain;
    }
    model.headerVariableList  = headerVariablesList;

    model.accessFromInternet  = 'No';
    if(formData.ssoSamePoliciesRadios == "Yes") {
      model.accessFromInternet  = 'Yes|'+formData.ssoSamePoliciesText;
    }
    model.splPolicyConfiguration = (formData.ssoPolicyConfigureRadios == 'Yes')?formData.ssoPolicyConfigureText:'';
    // third tab data capture
    var envDetails = [];
    // non prod data
    $(".nonProdFields").each(function() {
      var nonProdFormData = {};
      nonProdFormData.id = $(this).find(".envId").val();
      nonProdFormData.envName = $(this).find(".custom-name").val();
      var dateObject = $(this).find(".date-picker").datepicker("getDate");
      var dateString = $.datepicker.formatDate("yy-mm-dd", dateObject);  
      nonProdFormData.envDate = dateString;
      nonProdFormData.endUserUrl = $(this).find(".endUserUrl").val();
      nonProdFormData.appBackendUrl = $(this).find(".appBackendUrl").val();
      nonProdFormData.prefix =  ($(this).find("input:radio.wssoPolicyPrefix:checked").val() == 'Yes')?$(this).find(".wssoPolicyPrefixText").val():'';
      nonProdFormData.healthCheckUrl =  ($(this).find("input:radio.wssoLoadBalancer:checked").val() == 'Yes')?$(this).find(".wssoLoadBalancerText").val():'';
      var configList = [];
      $(this).find(".ipaddress").each(function() {
        var list = {};
        list.ipAddress = $(this).val();
        list.host = $(this).parents(".row").find(".hostname").val();
        list.fqdn = $(this).parents(".row").find(".fqdn").val();
        list.port = $(this).parents(".row").find(".ports").val();
        configList.push(list);
      });
      nonProdFormData.urlAddress = configList;
      envDetails.push(nonProdFormData);
    });
    // prod data
    $(".prodFields").each(function() {
      var prodFormData = {};
      prodFormData.id = $(this).find(".envId").val();
      prodFormData.envName = "PROD";
      var dateObject = $(this).find(".date-picker-prd").datepicker("getDate");
      var dateString = $.datepicker.formatDate("yy-mm-dd", dateObject);  
      prodFormData.envDate = dateString;
      prodFormData.endUserUrl = $(this).find(".endUserUrlP").val();
      prodFormData.appBackendUrl = $(this).find(".appBackendUrlP").val();
      prodFormData.prefix =  ($(this).find("input:radio.wssoPolicyPrefixP:checked").val() == 'Yes')?$(this).find(".wssoPolicyPrefixText").val():'';
      prodFormData.healthCheckUrl =  ($(this).find("input:radio.wssoLoadBalancerP:checked").val() == 'Yes')?$(this).find(".wssoLoadBalancerText").val():'';
      var configList = [];
      $(this).find(".ipaddress").each(function() {
        var list = {};
        list.ipAddress = $(this).val();
        list.host = $(this).parents(".row").find(".hostname").val();
        list.fqdn = $(this).parents(".row").find(".fqdn").val();
        list.port = $(this).parents(".row").find(".ports").val();
        configList.push(list);
      });
      prodFormData.urlAddress = configList;
      envDetails.push(prodFormData);
    });
    model.envDetails = envDetails;
    //model.qaRequirement = (formData.selfQA)?formData.selfQA:"";
    model.qaRequirement = (formData.selfQA == 'Yes')?'Y':"";    
    model.reverseProxy = (formData.farmoptionsRadios == 'No')?formData.farmoptionsExplain:'';
    model = JSON.stringify(model);
    console.log(model);
    return model;
  }
  // code for UI validations
  function getValidations() {
    var isValid = true;
    var selectedRadios = [];
    $('input[type="text"].required').each(function() {
      $(this).css({
        "border": "1px solid red",
      });
      $(this).siblings('.errorMessage').html("This field is mandatory").show();
      if ($.trim($(this).val()) == '') {
        isValid = false;
      }else {
        if($(this).hasClass('url')) {
          if(urlValidation($.trim($(this).val())) == false) {
            isValid = false;
            $(this).siblings('.errorMessage').html("Not a valid URL").show();
          }else {
            $(this).css({
                "border": "",
            });
            $(this).siblings('.errorMessage').html("This field is mandatory").hide();
          }
        }
        if($(this).hasClass('ipaddress')) {
          if(ipaddressValidation($.trim($(this).val())) == false) {
            isValid = false;
            $(this).siblings('.errorMessage').html("Not a valid IP Address").show();
          }else {
            $(this).css({
              "border": "",
            });
            $(this).siblings('.errorMessage').html("This field is mandatory").hide();
          }
        }
        if($(this).hasClass('hostname')) {
          if(hostnameValidation($.trim($(this).val())) == false) {
            isValid = false;
            $(this).siblings('.errorMessage').html("Not a valid Host Name").show();
          }else {
            $(this).css({
              "border": "",
            });
            $(this).siblings('.errorMessage').html("This field is mandatory").hide();
          }
        }
        if($(this).hasClass('fqdn')) {
          if(fqdnValidation($.trim($(this).val())) == false) {
            isValid = false;
            $(this).siblings('.errorMessage').html("Not a valid FQDN").show();
          }else {
            $(this).css({
              "border": "",
            });
            $(this).siblings('.errorMessage').html("This field is mandatory").hide();
          }
        }
        else {
          $(this).css({
              "border": "",
          });
          $(this).siblings('.errorMessage').html("This field is mandatory").hide();
        }
      }
    });

    $('textarea.required').each(function() {
      $(this).css({
        "border": "1px solid red",
      });
      $(this).siblings('.errorMessage').html("This field is mandatory").show();
      if ($.trim($(this).val()) == '') {
        isValid = false;
      }else {
        $(this).css({
            "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    });

    $('select.required').each(function() {
      $(this).css({
        "border": "1px solid red",
      });
      $(this).siblings('.errorMessage').html("This field is mandatory").show();
      if ($(this).val() == '') {
        isValid = false;
      }else {
        $(this).css({
          "border": "",
        });
        $(this).siblings('.errorMessage').html("This field is mandatory").hide();
      }
    });

    $('input:radio.required').each(function() {
      if($(this).is(':checked')) {        
        $(this).closest(".radio").children('label').css({"color":"black"});
        if (selectedRadios.indexOf($(this).attr("name")) < 0) {
          selectedRadios.push($(this).attr("name"));
        }
       // isValid = true;
      }else {
        if (selectedRadios.indexOf($(this).attr("name")) < 0) {
          $(this).parent("label").css({"color":"red"});
          isValid = false;
        }
      }
    });
    return isValid;
  }
// function definitions ends

// form approve
  $("#approve").on('click', function(event) {
    console.log("intg"+intgId);    
    $.ajax({
      url: "/IAMPortal/approveWSSO",
      type: "GET",
      data: {"intgId":intgId},
      contentType: "application/json",
      success: function(approvedata) {
        if(approvedata == true) {
          alert('Form approved');
        }else {
          alert('Approval failed !');
        }
      },
      error: function(e) {
       alert('Approval failed please try again');
      }
    });
  });
// form approve ends

// form submit area
  $("#formSubmit").on('click', function(event) {
    event.preventDefault();  
    var isValid = true;
    isValid = getValidations();
    if (isValid == false) {
        $.blockUI({ 
            message: "<b>Please fill all the required fields!</b>", 
            timeout: 2000 
        });
    }
    else  {
      alert(1);
     return false;
      var model = getFormModel();
      $.blockUI({ 
          message: "<b>Sending data to server, this won't take much time!</b>", 
          timeout: 3000 
      });
      if(intgId.length >0)
       url="/IAMPortal/updateWSSOForm";
          //?intgId="+intgId+"&wssoId="+wssoId;
      else
       url="/IAMPortal/saveWSSOForm";

      $.ajax({
           url: url,
      //  url: "/IAMPortal/saveWSSOForm",
        type: "POST",
        data: model,
        contentType: "application/json",
        success: function(data) {
         alert('ajax call successfully completed');
        },
        error: function(e) {
         alert('ajax call failed');
        }
     });
    }   
  });
// form submit area ends
}); 






