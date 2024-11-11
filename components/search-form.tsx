import Form from 'next/form'
import { SearchFormReset } from './search-form-reset'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

export function SearchForm({query}: {query?: string}) {

    return (
        <Form action='/' scroll={false} className='search-form'>
            <input
                name='query'
                defaultValue={query}
                className='search-input'
                placeholder='Search Startups'
            />
            <div className='flex gap-2'>
                {query && (<SearchFormReset/>)}
                <Button className='search-btn text-white' type='submit'>
                    <Search className='size-5'/>
                </Button>
            </div>
        </Form>
    )
}