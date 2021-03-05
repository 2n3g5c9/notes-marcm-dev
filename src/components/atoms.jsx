import React from 'react'

export const AboutHeading = ({ title, contactText, contactLink }) => (
  <div className="flex pb-1">
    <h1 className="flex-1 font-bold leading-7 min-w-0 text-primary text-2xl sm:text-3xl sm:truncate">
      {title}
    </h1>
    <a
      href={contactLink}
      className="bg-accent hover:bg-accent-hover border border-transparent font-medium inline-flex items-center m-auto px-3 sm:px-4 py-1 sm:py-2 rounded-md shadow-sm text-sm text-tertiary"
      aria-label={contactText}
      target="_blank"
      rel="noopener noreferrer"
    >
      {contactText}
    </a>
  </div>
)

export const NoteHeading = ({ title, summary, category }) => (
  <div className="max-w-prose mx-auto py-2 sm:py-4 text-lg">
    <h1>
      <span className="block font-semibold text-accent text-center text-sm sm:text-base tracking-wide uppercase">
        {category}
      </span>
      <span className="block font-extrabold font-serif leading-8 mt-1 sm:mt-2 text-center text-2xl sm:text-4xl tracking-tight">
        {title}
      </span>
    </h1>
    <p className="leading-normal sm:leading-8 mt-6 sm:mt-8 text-secondary text-sm sm:text-lg">
      {summary}
    </p>
  </div>
)

export const NoteBody = ({ children }) => (
  <div className="max-w-5xl mx-auto">{children}</div>
)

export const NotesHeading = ({ title, subtitle }) => (
  <>
    <h1 className="font-bold leading-7 text-primary text-2xl sm:text-3xl sm:truncate">
      {title}
    </h1>
    <div className="lg:gap-5 lg:grid lg:grid-cols-2 lg:items-center mt-3 sm:mt-4">
      <p className="text-base sm:text-xl text-secondary">{subtitle}</p>
    </div>
  </>
)

export const NoteSummaries = ({ children }) => (
  <div className="gap-16 lg:gap-x-5 lg:gap-y-12 grid lg:grid-cols-2 mt-6 pt-2 sm:pt-6">
    {children}
  </div>
)
