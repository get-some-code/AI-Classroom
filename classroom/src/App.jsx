import React, { useState, useEffect } from 'react';
import { Upload, FileAudio, Sparkles, BookOpen, HelpCircle, MessageCircle, ChevronRight, Zap, Check } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('summary');
  const [summaryLength, setSummaryLength] = useState('short');
  const [transcript, setTranscript] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 p-8">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              PrepLy
            </h1>
          </div>
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
            <a
              href="https://github.com/get-some-code/AI-Classroom/tree/main/classroom"
              target="_blank"
              aria-label="View source on GitHub"
              className="
    group absolute right-0 top-1/2 -translate-y-1/2
    p-3 rounded-2xl
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
    text-white
    shadow-lg shadow-black/20
    transition-all duration-500 ease-out
    hover:shadow-2xl hover:shadow-indigo-500/30
    hover:-translate-y-[55%]
    focus:outline-none focus:ring-2 focus:ring-indigo-500/40
    animate-float
  "
            >
              {/* Glow Layer */}
              <span
                className="
      absolute inset-0 rounded-2xl
      bg-gradient-to-br from-indigo-500/30 to-cyan-400/30
      opacity-0 blur-xl
      transition-opacity duration-500
      group-hover:opacity-100
    "
              />

              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
      relative z-10 w-6 h-6
      transition-transform duration-500
      group-hover:rotate-12 group-hover:scale-110
    "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.55 5.65.55 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 5 19 5.3 19 5.3c.6 1.5.2 2.7.1 3 .8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.45 12C23.45 5.65 18.35.5 12 .5z" />
              </svg>
            </a>


          </div>
        </div>
        <p className="text-slate-600 mt-3 text-lg">
          Upload a lecture and instantly get notes, summary, exam questions & a doubt chatbot.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Left Column - Upload Section */}
        <div className="space-y-6">
          {/* Upload Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">1. Upload lecture</h2>
              </div>
              <p className="text-slate-600 mb-6">Use audio OR paste raw transcript text.</p>

              {/* Audio Upload Section */}
              <div className="relative group mb-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer group-hover:bg-blue-50/50">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <FileAudio className="w-14 h-14 text-blue-500 relative group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Select audio file</h3>
                  <p className="text-slate-600 text-sm mb-1">
                    Click to choose a lecture recording (MP3 / WAV / M4A).
                  </p>
                  <p className="text-slate-500 text-sm mb-3">No file selected.</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <p className="text-emerald-700 text-xs font-medium">
                      Optional: skip file and paste transcript below
                    </p>
                  </div>
                </div>
              </div>

              {/* Transcript Input */}
              <div className="mb-6">
                <label className="text-slate-700 text-sm mb-2 block font-medium">Or paste transcript manually:</label>
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Paste your lecture transcript here if you already have it..."
                  className="w-full h-32 bg-white border border-slate-300 rounded-xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none shadow-sm"
                />
              </div>

              {/* Generate Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  <Sparkles className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
                  Generate Exam Pack
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Transcript Preview Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 transform transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              Transcript preview
            </h3>
            <p className="text-slate-600 text-sm mb-4">What we understood from your lecture.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
              <p className="text-slate-500 text-center text-sm">
                No transcript yet. Upload audio or paste text and click "Generate Exam Pack".
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Exam Pack */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. Exam-Ready Pack</h2>
            </div>
            <p className="text-slate-600 mb-6">Switch between summary, notes, questions and chatbot.</p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {[
                { id: 'summary', label: 'Summary', icon: BookOpen },
                { id: 'notes', label: 'Notes', icon: FileAudio },
                { id: 'questions', label: 'Questions', icon: HelpCircle },
                { id: 'chatbot', label: 'Doubts Chatbot', icon: MessageCircle }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Summary Length Options */}
            {activeTab === 'summary' && (
              <div className="flex gap-2 mb-6">
                {['short', 'medium', 'detailed'].map(length => (
                  <button
                    key={length}
                    onClick={() => setSummaryLength(length)}
                    className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-200 ${summaryLength === length
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {length}
                  </button>
                ))}
              </div>
            )}

            {/* Content Areas */}
            <div className="space-y-4">
              {activeTab === 'summary' && (
                <>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-emerald-200/50">
                    <h3 className="font-semibold mb-2 text-emerald-900 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Short summary (10-second recall)
                    </h3>
                    <p className="text-slate-600 text-sm">No summary yet.</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-blue-200/50">
                    <h3 className="font-semibold mb-2 text-blue-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Medium summary (revision before exam)
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Once you generate the pack, a 2-4 line explanation will appear here.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-purple-200/50">
                    <h3 className="font-semibold mb-2 text-purple-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Detailed summary (full concept walk-through)
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Generated content for deep revision will be shown here.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'notes' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 min-h-[400px] flex items-center justify-center transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <FileAudio className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                    <p className="text-slate-600">Structured notes will appear here after generation.</p>
                  </div>
                </div>
              )}

              {activeTab === 'questions' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 min-h-[400px] flex items-center justify-center transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <HelpCircle className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                    <p className="text-slate-600">Practice questions will be generated here.</p>
                  </div>
                </div>
              )}

              {activeTab === 'chatbot' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 min-h-[400px] flex items-center justify-center transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                    <p className="text-slate-600">Ask your doubts about the lecture content here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;