import React from 'react'

const Book = () => {
  return (
    <div>

      <h1>Services</h1>

      <div>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            // maxW={{ base: '100%', sm: '200px' }}
            src='https://placehold.co/100x100'
            alt='placeholder'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Service Name</Heading>
              <Text py='2'>
                Service Description
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Book service
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>

      <div>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            // maxW={{ base: '100%', sm: '200px' }}
            src='https://placehold.co/100x100'
            alt='placeholder'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Service Name</Heading>
              <Text py='2'>
                Service Description
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Book service
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>

      <div>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            // maxW={{ base: '100%', sm: '200px' }}
            src='https://placehold.co/100x100'
            alt='placeholder'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Service Name</Heading>
              <Text py='2'>
                Service Description
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Book service
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>

      <div>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            // maxW={{ base: '100%', sm: '200px' }}
            src='https://placehold.co/100x100'
            alt='placeholder'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Service Name</Heading>
              <Text py='2'>
                Service Description
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Book service
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>

    </div>
  )
}

export default Book
