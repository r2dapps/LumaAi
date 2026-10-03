🤣 Exactly. You go break it; I’ll go fix it. That is a much better engineering loop.

And no, I can't turn off my servers 😆 — otherwise you'd have nobody to blame when the next slider mysteriously does nothing.

# Luma — Feature Roadmap

I'm deliberately not changing the current UI until your testing finds something wrong. Future work should build underneath the UI rather than redesigning it every two days.


## Phase 1 — Companion Intelligence 🧠

1. Persistent companion memory
   - Long-term memories
   - Important facts
   - Preferences
   - Likes/dislikes
   - Goals
   - Important people
   - Conversation-derived memories
   - Manual memory editing
   - Forget/delete
   - Memory importance/confidence
   - Relevant-memory retrieval

2. Memory summarization
   - Compress old conversations
   - Preserve important information
   - Avoid stuffing entire chat history into context

3. Conversation context manager
   - Recent messages
   - Relevant memories
   - Current conversation summary
   - Companion profile
   - User profile
   - Relationship
   - Custom vocabulary

4. Personality consistency
   - Prevent persona drift
   - Companion ≠ user
   - Correct user name/pronouns
   - Consistent relationship
   - Consistent speaking style


## Phase 2 — Human-like Companion Behavior

5. Natural conversation modes
   - Casual
   - Deep conversation
   - Playful
   - Supportive
   - Romantic
   - Serious
   - Funny
   - Quiet
   - Storytelling

6. Conversation initiative
   - Companion can optionally start topics
   - Follow up on previous conversations
   - Remember unfinished discussions
   - "You mentioned yesterday..."

7. Relationship progression
   - Relationship state
   - Shared memories
   - Important dates
   - Conversation milestones
   - Custom relationship rules

8. Nickname system
   - User nickname
   - Companion nickname
   - Contextual nicknames
   - User-defined preferred forms of address


## Phase 3 — Voice 🎙️

9. Better speech-to-text
   - Browser Speech API initially
   - Local Whisper/WebGPU later
   - Push-to-talk
   - Continuous listening mode
   - Language selection

10. Voice personalities
    - Warm
    - Calm
    - Energetic
    - Soft
    - Serious
    - Storytelling

11. Streaming TTS
    - Start speaking while the model is still generating
    - Interrupt speech
    - Resume
    - Sentence-level streaming

12. Fully offline voice pipeline

    Microphone
        ↓
    Local STT
        ↓
    WebGPU LLM
        ↓
    Streaming TTS
        ↓
    Speaker

    That's the eventual zero-cloud companion.


## Phase 4 — Luma's Local AI Engine

13. Smart model selection ← we're already working on this

14. Model benchmark history
    - Remember benchmark result
    - Don't benchmark every launch

15. Model download manager
    - Pause
    - Resume
    - Cancel
    - Delete
    - Storage usage

16. Model cache manager
    - Installed models
    - Model sizes
    - Last used
    - Delete unused models

17. Automatic fallback

    WebGPU unavailable
            ↓
       WASM fallback
            ↓
       smaller model

18. Context-length management
    - Automatically select context size
    - Protect mobile memory
    - Summarize when necessary

19. Generation controls
    - Temperature
    - Top-p
    - Max tokens
    - Repetition penalty
    - Seed where supported


## Phase 5 — ChatGPT-level Chat Functionality

20. Edit message
21. Regenerate
22. Regenerate from an earlier message
23. Stop generation
24. Retry generation
25. Branch conversation
26. Rename conversation
27. Search conversations
28. Pin conversations
29. Archive conversations
30. Export conversation
31. Import conversation
32. Markdown
33. Code blocks
34. Syntax highlighting
35. Copy code
36. Tables
37. LaTeX/math rendering
38. Image understanding when a suitable local vision model is available


## Phase 6 — Companion Customization

39. Custom avatar
40. Avatar expressions
41. Companion appearance
42. Voice selection
43. Personality presets
44. Custom system personality
45. Custom vocabulary
46. Preferred phrases + frequency
47. Words to avoid
48. Speaking quirks
49. Emoji behavior
50. Response length
51. Humor style
52. Custom relationship
53. Custom role
54. Custom boundaries/preferences


## Phase 7 — Local Data Architecture

Eventually I want this:

IndexedDB
│
├── companions
│
├── conversations
│
├── messages
│
├── memories
│
├── user_profile
│
├── model_registry
│
├── model_cache_info
│
└── app_settings

With no account and no server database.


## Phase 8 — PC Power Mode 🖥️

This is the interesting "out-of-the-box" idea.

Later:

                    Luma UI
                       │
          ┌────────────┼────────────┐
          │            │            │
       Mobile       Laptop       Desktop
          │            │            │
       WebLLM       WebLLM       Local GPU
                                      │
                               Ollama / llama.cpp
                                      │
                                GGUF models

Then your phone could potentially connect to your own PC over LAN and use a much larger model.

That would be Luma LAN Mode.


## Phase 9 — PWA / Distribution

- Installable PWA
- Offline service worker
- App manifest
- Proper icons
- Update mechanism
- Storage management
- First-run onboarding
- Model download onboarding
- GitHub Pages deployment
- README
- Mobile installation instructions
- Browser compatibility page
- Privacy documentation


## One Feature I Really Want Eventually

### 🧠 "What should Luma remember?"

Instead of silently remembering everything, the system can periodically decide:

Potential memory

"Raja prefers concise explanations."

[ Remember ]  [ Ignore ]

Then the user controls the companion's long-term memory.

That's much better than secretly accumulating a giant transcript.


## For Now

🫡 Freeze the code.

You test:

- Android Chrome
- Laptop Chrome/Edge
- Model download
- WebGPU inference
- Generation speed
- Overheating/memory
- Voice
- Mobile UI
- Settings
- Companion creation
- Relationship
- Memory
- Persistence
- Reload
- Offline after model caching

Then come back with the bugs, screenshots, console errors, or simply:

"Bro, this thing exploded 😂"

and we'll debug the actual device behavior instead of guessing from a sandbox.
