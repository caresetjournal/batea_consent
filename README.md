Batea Consent Form
==============================

As part of the batea project (https://batea.docgraph.com/) we needed to have a sophisticated web-based consent form. 

In order to accomplish this, we created a web-based rewrite/fork of the Sage-BioNetworks PCC Toolkit https://github.com/Sage-Bionetworks/PCC-Toolkit

The codebase portion of the consent was written from-scratch by the folks at Videntity, but the general flow of the consent process was copied as identically as possible. We were even able to reuse some of the excellent graphics and animations from that original project. 

We chose to implement this consent form entirely in Angular JS in the hopes that other web-based projects that required IRB-approved consent processes would be able to reuse as much as possible (in the same way the Sage-BioNetworks encourages forking of their code for iOS applications). By using Angular and keeping everything in one, very large, web form, you can include a fork of this code in your own web-based consent process no matter what backend you are using to implement the rest of your web application.

This should make it ideal for doing complex consent forms for web applications and/or browser extensions.

*Created by Videntity for DocGraph*

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

Fetch the latest release from github and copy the folder contents to any static webserver.


Changing the POST URL
=====================
Change the contents of the config.js file to point to your server REST code.
 

