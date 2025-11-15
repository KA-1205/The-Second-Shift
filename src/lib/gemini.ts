// Google Gemini API integration for AI features

const GEMINI_API_KEY = "AIzaSyCSHVhKEBk1J4SeiRUSlyvH90rHoRqcpp0";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export const analyzeSkills = async (resumeText: string): Promise<string> => {
  try {
    const prompt = `Analyze the following resume/work history and provide:
1. Top 5 existing skills with confidence scores (0-100)
2. 3 key skill gaps for today's job market
3. 3 recommended learning topics with specific tools/technologies
4. Keep response under 180 words, actionable and encouraging

Resume/History:
${resumeText}

Format the response as:
**Existing Strengths:**
- [Skill]: [Level] (Confidence: XX%)

**Skill Gaps to Address:**
- [Gap]: [Specific tools/topics]

**Recommended Learning Path:**
1. [Topic]: [Why it matters]
2. [Topic]: [Why it matters]
3. [Topic]: [Why it matters]

**Next Steps:**
[1-2 practical actions to start]`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to analyze skills');
    }

    const data: GeminiResponse = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Skill analysis error:', error);
    throw new Error('Unable to analyze skills at this time. Please try again.');
  }
};

export const rewriteResume = async (
  resumeText: string,
  targetRole: string,
  tone: 'professional' | 'empathetic' | 'executive'
): Promise<string> => {
  try {
    const toneInstructions = {
      professional: "Use clear, professional language. Focus on achievements and metrics.",
      empathetic: "Use warm, encouraging language. Acknowledge career break positively and focus on transferable skills.",
      executive: "Use confident, leadership-focused language. Emphasize strategic thinking and impact."
    };

    const prompt = `Rewrite this resume for a "${targetRole}" role. Tone: ${tone}

Instructions:
- Create a compelling professional summary (40-60 words)
- Rewrite top 3 work experiences with 3 impactful bullets each
- List 6-10 relevant skills for ATS optimization
- ${toneInstructions[tone]}
- If there's a career gap, frame it positively
- Keep total response under 250 words

Original Resume:
${resumeText}

Format:
**PROFESSIONAL SUMMARY**
[Compelling 40-60 word summary]

**EXPERIENCE**
[Company] - [Role] ([Years])
• [Achievement-focused bullet]
• [Achievement-focused bullet]
• [Achievement-focused bullet]

[Repeat for top 2-3 positions]

**KEY SKILLS**
[Skill 1] | [Skill 2] | [Skill 3] | [Skill 4] | [Skill 5] | [Skill 6]

**SUGGESTED FILENAME**
[FirstName]_[LastName]_[Role]_Resume.pdf`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite resume');
    }

    const data: GeminiResponse = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Resume rewrite error:', error);
    throw new Error('Unable to rewrite resume at this time. Please try again.');
  }
};
