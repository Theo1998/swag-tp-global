<?php
/**
 * Test the secret class.
 *
 * PHP version 5
 *
 * @category   Horde
 * @package    Secret
 * @subpackage UnitTests
 * @author     Michael Slusarz <slusarz@horde.org>
 * @license    http://www.horde.org/licenses/lgpl21 LGPL 2.1
 */

/**
 * Test the secret class.
 *
 * Copyright 2009-2017 Horde LLC (http://www.horde.org/)
 *
 * See the enclosed file LICENSE for license information (LGPL). If you
 * did not receive this file, see http://www.horde.org/licenses/lgpl21.
 *
 * @category   Horde
 * @package    Secret
 * @subpackage UnitTests
 * @author     Michael Slusarz <slusarz@horde.org>
 * @license    http://www.horde.org/licenses/lgpl21 LGPL 2.1
 */

class Horde_Secret_Unit_SecretTest extends \PHPUnit\Framework\TestCase
{
    public function test8BitKey()
    {
        $secret = new Horde_Secret();

        $key = "\x88";
        $plaintext = "\x01\x01\x01\x01\x01\x01\x01\x01";

        $this->assertEquals($plaintext, $secret->read($key, $secret->write($key, $plaintext)));
    }

    public function test64BitKey()
    {
        $secret = new Horde_Secret();

        $key = "\x00\x00\x00\x00\x00\x00\x00\x00";
        $plaintext = "\x01\x01\x01\x01\x01\x01\x01\x01";

        $this->assertEquals($plaintext, $secret->read($key, $secret->write($key, $plaintext)));
    }

    public function test128BitKey()
    {
        $secret = new Horde_Secret();

        $key = "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F";
        $plaintext = "\x01\x01\x01\x01\x01\x01\x01\x01";

        $this->assertEquals($plaintext, $secret->read($key, $secret->write($key, $plaintext)));
    }

    /**
     * Bug #9121: Remove null padding on stored data
     */
    public function testNullPadding()
    {
        $secret = new Horde_Secret();

        $key = "\x88";
        $plaintext = "\x01\x01\x01\x01\x01\x01\x01\x01";

        $this->assertEquals($plaintext, $secret->read($key, $secret->write($key, $plaintext)));
    }

    public function testKeyException()
    {
        $this->expectException(Horde_Secret_Exception::class);
        $secret = new Horde_Secret();
        $secret->read(new Horde_Secret_Stub_Message(), "\x01");
    }

    public function testLongKeyException()
    {
        $secret = new Horde_Secret();
        $this->assertEquals(
            $secret->read('012345678901234567890123456789012345678901234567890123456', "\x01"),
            $secret->read('012345678901234567890123456789012345678901234567890123456789', "\x01")
        );
    }

    public function testShortKeyRead()
    {
        $secret = new Horde_Secret();
        $this->assertEquals('', $secret->read('', "\x01"));
    }

    public function testShortKeyWrite()
    {
        $secret = new Horde_Secret();
        $this->assertEquals('', $secret->write('', "\x01"));
    }
}
