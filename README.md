Batea Consent Form
==============================

As part of the batea project (https://batea.docgraph.org/) we needed to have a sophisticated web-based consent form. 

In order to accomplish this, we created a web-based rewrite/fork of the Sage-BioNetworks PCC Toolkit https://github.com/Sage-Bionetworks/PCC-Toolkit

The codebase portion of the consent was written from-scratch by the folks at Videntity, but the general flow of the consent process was copied as identically as possible. We were even able to reuse some of the excellent graphics and animations from that original project. 

We chose to implement this consent form entirely in Angular JS in the hopes that other web-based projects that required IRB-approved consent processes would be able to reuse as much as possible (in the same way the Sage-BioNetworks encourages forking of their code for iOS applications). By using Angular and keeping everything in one, very large, web form, you can include a fork of this code in your own web-based consent process no matter what backend you are using to implement the rest of your web application.


*Created by Videntity for DocGraph*

Introduction
------------

consent-form is an browser-based application using HTML5, AngularJS, and Bootstrap3  that submits data HTTP POST as JSON to a RESTFul API connected to a MongoDB database.  The backend RESTFul service is currenly provided by DjMongo https://github.com/videntity/django-djmongo.


Components
-----------

* Source Code(Private): https://github.com/videntity/consent-form
* Client application: http://consent.npi.io
* Submission API : https://registry.npi.io/write/api/ip/consent-form (See example request body)
* Database Management: https://registry.npi.io/console (username password)
* Searchable Read API: https://registry.npi.io/search/api/public/batea/consent-form.json 



**How to use the searchable API:** 

*(Currently the READ API is public but this can be changed in the djmongo web console.)*

* Use `GET` parameters such as `?param1=value1&param2%value2` to search through results. 
* Use dot.notion to drill into the docments. 
* Use parameters `skip` and `limit` will handle pagination. 
* Use 'include_num_results=1' to include a field `num_results` with the total number of search results. `include_num_reults` can be an expensive operation on large datasets without proper indexes so it is not included by default.). 
* Change `.json` in the url to `csv` to get csv results instead.


Example Request Body (JSON):
----------------------------

       {

        "random_id": 9441309242,
        "birthYear": 1967,
        "firstName": "James",
        "lastName": "Kirk",
        "email": "james@example.com",
        "english": true,
        "atLeast18": true,videntity/django-djmongo
        "clinicalCareInvolved": "no",
        "clinincalCareReceiving": "caregiver",
        "schoolEmail": "school@example.com",
        "mcatScore": 5000,
        "illnesses": "hypertension",
        "caretakerOptions":
            {
                "grandson": true,
                "grandfather": true,
                "grandmother": true,
                "mother": true,
                "father": true,
                "son": true,
                "daughter": true,
                "sister": true,
                "brother": true
            },
        "step1Score": 24680,
        "step2Score": 12345,
        "medSchool": "School",
        "gradYear": 2005,
        "npi": "1234567890",
        "specialty": "Pediatric Oncology",
        "patientLanguages": "English, Spanish, Clingon",
        "id": "5628eda2175d150d9a313ebc"
    }




Installation
============

Fetch the latest release from github and copy the folder contents to any static webserver.  Currently we are using S3 for this to host http://consent.npi.io for under 5 cents/mo. :-)


Changing the POST URL
=====================
The current post URL is:

Change the file `app/form.controller.js` near the very bottom look for:


      formFactory.submitForm('https://registry.npi.io/write/api/ip/consent-form'...

and change the first parameter of `submitForm`.

