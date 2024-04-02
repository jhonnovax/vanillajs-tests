import FroalaEditor1 from "./lib/froala-editor.mjs";
import FroalaEditor2 from "./lib/froala-editor-pkgd.mjs";

function initApp() {
	const editorEl1 = document.querySelector("#froala-editor-1");
	const editorEl2 = document.querySelector("#froala-editor-2");
	const editorOptions = {
		type: 'reduced',
		minHeight: 230,
		value: 'This is an example of GoLive Reduced Version',
		tokens : {
			"FIRSTNAME": "First Name", 
			"LASTNAME":  "Last Name", 
			"EMAIL": "Email Address", 
			"EVENTTITLE": "Event Title",
			"EVENTSTARTDATE": "Event Start Date and Time",
			"EVENTENDDATE" : "Event End Date and Time",
			"AUDIENCEURL": "Audience URL",
			"CALENDARREMINDER": "Calendar Reminder",
			"EMAILSETTINGSURL": "Email Settings Url"
		},
		options : {
			imageInsertButtons: "[\"imageByURL\"]",
			scrollableContainer: "#container-wrapper",
			toolbarContainer: "#container-toolbar",
			fontFamily: {
				"Arial,Helvetica,sans-serif": 'Arial',
				"'Comic Sans MS', cursive" : 'Comic Sans',
				"'Courier New', Courier, monospace": 'Courier New',
				"Georgia, serif": 'Georgia',
				"'Lucida Sans Unicode', 'Lucida Grande', sans-serif" : 'Lucida Sans',
				"'Segoe UI',Frutiger,'Frutiger Linotype','Dejavu Sans','Helvetica Neue',Arial,sans-serif" : 'Segoe UI',
				"Tahoma,Geneva,sans-serif": 'Tahoma',
				"'Times New Roman',Times,serif": 'Times New Roman',
				"'Trebuchet MS', Helvetica, sans-serif": 'Trebuchet MS',
				"Verdana,Geneva,sans-serif": 'Verdana'
				}
		}
	};
	
	new FroalaEditor1(editorEl1, editorOptions);
	new FroalaEditor2(editorEl2, editorOptions);
}

initApp();