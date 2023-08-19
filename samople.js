
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



// 現在のトップｊｓｘ
return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
        <Sidebar />
        <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
            {data.map((item, index) => {
                let date = item.published_at ? new Date(item.published_at) : null;
                let formattedDate = "";
  
                if (date && !isNaN(date.getTime())) {
                    formattedDate = new Intl.DateTimeFormat('ja-JP', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit', second: '2-digit'
                    }).format(date);
                } else {
                    console.error("Invalid date: ", item.published_at);
                }
  
                let tagsArray = [];
                if (item.tag) {
                    tagsArray = item.tag.split(',').map(tag => tag.trim());
                }
  
                return (
                    <div key={index} className='Ui w-96 h-auto p-4 bg-white shadow-md rounded-md'>
                        <div onClick={() => { handleClickCount(item.id) }}>
                            <Link href="/item/[items]" as={`/${item.site_id}/${item.id}`}>
                                
                                    <div className="Topimages w-full h-56 bg-pink-100 rounded-sm mb-4">
                                        <Image fill src={item.imgurl} className={styles.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                    </div>
                                    <div className="Titles text-black text-2xl font-normal mb-4">
                                        {item.title}
                                    </div>
                            </Link>
  
                                    <div className="Tags text-black text-2xl font-normal mb-4">
                                        <Tags tagsArray={tagsArray} />
                                    </div>
  
                                    <div className="Clicks text-center mb-4">
                                        <span style={{ color: 'black', fontSize: '24px', fontWeight: 'normal', letterSpacing: '0.1em' }}>
                                            {clickCounts[item.id] || 0}
                                        </span>
                                        <span style={{ color: 'black', fontSize: '16px', fontWeight: 'normal', letterSpacing: '0.1em' }}>
                                            Click
                                        </span>
                                    </div>
                                
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
