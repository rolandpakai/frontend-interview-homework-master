import React from 'react'

type ListItemProps = { 
  index: number,
  name: string,
  score: number,
  linkUrl: string,
  logoUrl: string,
};

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { index, name, score, linkUrl, logoUrl } = props;

  return (
    <div className="w-full border-b last:border-none border-secondary-50">
      <a href={linkUrl} target="_blank" className="openAccountBtn">
          <div className="hover:bg-secondary-50 py-3">
              <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start w-7 pl-1 font-semibold">{index}.</div>
                  <div className="w-full">
                      <div className="flex items-center text-sm font-semibold">
                          <div className="flex items-center pr-1.5">
                              <span className="w-8 h-8 bg-cover no-gallery" style={{backgroundImage: `url(${logoUrl})`}}></span>
                          </div>
                          <div className="">{name}</div>
                          <div className="ml-auto mx-3">{score}</div>
                      </div>
                  </div>
                  <span className="svg_icon arrow-right"></span>
              </div>
          </div>
      </a>
    </div>
  )
};

export default ListItem;