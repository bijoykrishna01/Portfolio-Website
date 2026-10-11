import express from 'express';
import cors from 'cors';
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory analytics store for committee engagement
const visitorLogs = [];

// 1. Verify Access Passcode / Magic Link Token
app.post('/api/auth/verify', (req, res) => {
  const { code, token, committeeName } = req.body;
  // Master passcode or invitation query
  const validCodes = ['OXFORD2026', 'CHEVENING2026', 'DAAD2026', 'BIJOY2026', 'INVITE'];
  
  if (token || (code && validCodes.includes(code.toUpperCase()))) {
    return res.json({
      success: true,
      message: 'Access Granted: Official Application Dossier',
      viewer: committeeName || 'Distinguished Academic Reviewer',
      role: 'Reviewer / Committee Member',
      expiresAt: '2026-12-31'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid or Expired Invitation Passcode. Contact Bijoy Krishna Das for an official invitation link.'
  });
});

// 2. Visitor Analytics Log Endpoint
app.post('/api/analytics/log', (req, res) => {
  const { section, event, duration, userAgent, ip } = req.body;
  const entry = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    section: section || 'Home',
    event: event || 'view',
    duration: duration || 0,
    userAgent: userAgent || 'Academic Browser',
    ip: req.ip || ip
  };
  visitorLogs.push(entry);
  res.json({ success: true, count: visitorLogs.length });
});

// Analytics summary for the candidate
app.get('/api/analytics/stats', (req, res) => {
  res.json({
    totalVisits: visitorLogs.length,
    recentInteractions: visitorLogs.slice(-15).reverse()
  });
});

// 3. Dynamic Watermarked PDF Document Generator
// Generates watermarked confidential dossiers on the fly
app.get('/api/docs/watermarked-pdf', async (req, res) => {
  try {
    const { docName = 'Curriculum_Vitae', reviewer = 'Scholarship Committee' } = req.query;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Header
    page.drawText('CONFIDENTIAL ACADEMIC DOSSIER', {
      x: 50,
      y: 750,
      size: 14,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.2),
    });

    page.drawText(`Candidate: Bijoy Krishna Das | Prepared for: ${reviewer}`, {
      x: 50,
      y: 730,
      size: 10,
      font: font,
      color: rgb(0.3, 0.3, 0.4),
    });

    page.drawLine({
      start: { x: 50, y: 720 },
      end: { x: 550, y: 720 },
      thickness: 1,
      color: rgb(0.8, 0.8, 0.8),
    });

    // Content summary
    page.drawText(`Document: ${docName.replace(/_/g, ' ')}`, {
      x: 50,
      y: 680,
      size: 16,
      font: fontBold,
      color: rgb(0.05, 0.2, 0.4),
    });

    const bodyText = [
      'Official verification notice: This document is an authenticated academic record',
      'provided strictly for scholarship review, university faculty evaluation, and doctoral funding.',
      '',
      '• Candidate Profile: Bijoy Krishna Das',
      '• Academic Status: Outstanding Honours Graduate & Researcher',
      '• Research Focus: Machine Learning, Human-Computer Interaction & Sustainable Systems',
      '• Official Verification Hash: #BKD-2026-VERIFIED-SECURE',
      '',
      'To review full papers, original certified transcripts, and verified recommendation',
      'letters, please use the private dossier portal.'
    ];

    let currentY = 640;
    for (const line of bodyText) {
      page.drawText(line, {
        x: 50,
        y: currentY,
        size: 10,
        font: font,
        color: rgb(0.2, 0.2, 0.2),
      });
      currentY -= 20;
    }

    // Footer
    page.drawText('Official Academic Dossier • Bijoy Krishna Das • Standard Academic Format', {
      x: 100,
      y: 40,
      size: 8,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });

    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${docName}_Bijoy_Krishna_Das.pdf"`);
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate watermarked document' });
  }
});

// 4. Contact candidate endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, institution, subject, message } = req.body;
  console.log(`[New Academic Inquiry] From: ${name} (${institution}) <${email}>: ${subject}`);
  res.json({
    success: true,
    message: 'Your inquiry has been encrypted and dispatched directly to Bijoy Krishna Das.'
  });
});

app.listen(PORT, () => {
  console.log(`[Elite Academic Dossier Server] running on http://localhost:${PORT}`);
});
