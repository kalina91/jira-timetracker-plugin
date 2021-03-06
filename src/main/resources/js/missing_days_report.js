/*
 * Copyright (C) 2011 Everit Kft. (http://www.everit.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
window.missing_days_report = window.missing_days_report || {}
everit.jttp.missing_days_report = everit.jttp.missing_days_report || {};

(function(jttp, jQuery) {

  jQuery(document).ready(function() {
    setCheckWorkedHours();
  });

  function setCheckWorkedHours() {
    if (jQuery("#hour").is(":checked")) {
      document.getElementById("nonworking").disabled = false;
    } else {
      document.getElementById("nonworking").disabled = true;
    }
  }

})(everit.jttp.missing_days_report, jQuery);