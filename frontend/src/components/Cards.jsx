import React from "react";

function Cards({item}) { //props should be same as passed from parent
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300  items-stretch dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex-wrap">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-400 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
