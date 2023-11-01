import { useEffect, useState } from "react"

const MAX_LENGTH = 100

const getSlicedDescription = (description) => {
  const words = description.split(' ')
  const slicedWords = []

  for (let i = 0; i < words.length; i++) {
    slicedWords.push(words[i])

    if (slicedWords.join(' ').length > MAX_LENGTH) {
      break
    }
  }

  return slicedWords.join(' ');
}

const Description = ({
  description
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setIsExpanded(false)
  }, [description])

  return (
    <div className="text-xl leading-snug">
      <span className="text-black-100">
        {isExpanded ? description : getSlicedDescription(description)}
      </span>
      {' '}
      {description.length > 100 && (
        <button
          className="text-grey-100"
          onClick={() => setIsExpanded((prevValue) => !prevValue)}
        >
          {isExpanded ? 'less' : '... more'}
        </button>
      )}
    </div>
  )
}

export default Description
