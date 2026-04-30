'use strict';

const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    personalInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        address: { type: String, required: false },
        summary: { type: String, required: false }
    },
    experience: [{
        jobTitle: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: false },
        responsibilities: { type: String, required: true }
    }],
    education: [{
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        location: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: false }
    }],
    skills: [{
        skill: { type: String, required: true }
    }],
    certifications: [{
        title: { type: String, required: true },
        issuer: { type: String, required: true },
        date: { type: Date, required: true }
    }]
});

module.exports = mongoose.model('Resume', resumeSchema);